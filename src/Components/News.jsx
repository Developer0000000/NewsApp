import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News(props) {

    let { country, pageSize, category, colors, setProgress, apiKey, mode } = props

    let [apiNews, setApiNews] = useState([]);
    let [totalArticles, setTotalArticles] = useState(0);
    let [page, setPage] = useState(1);
    let [loading, setLoading] = useState(false);

    const news = async () => {
        setProgress(15);
        setLoading(true);
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}&pageSize=${pageSize}&category=${category}&page=${page}`;
        setProgress(50);
        let res = await fetch(url);
        let data = await res.json();
        setProgress(75);
        setLoading(false);
        setApiNews(data.articles);
        setTotalArticles(data.totalResults);
        setProgress(100);

    }

    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    useEffect(() => {
        /* eslint-disable */
        news();
        document.title = ` World's News -  ${capitalize(category)}`
    }, []);


    const fetchMoreData = async () => {
        setProgress(15);
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}&pageSize=${pageSize}&category=${category}&page=${page + 1}`;
        setProgress(50);
        let res = await fetch(url);
        let data = await res.json();
        setProgress(75);
        setPage(page + 1);
        setLoading(false);
        setApiNews(apiNews.concat(data.articles));
        setTotalArticles(data.totalResults);
        setProgress(100);
    };

    return (
        <>
            <br />
            <br />
            <h2 className='my-5 pt-5 pb-3 text-center'>World's News - Top {capitalize(category)} Headlines</h2>
            {loading && <Spinner />}
            <div className="overflow-x-hidden">
                <div className="container d-flex justify-content-center ">

                    <InfiniteScroll
                        style={{ overflowX: 'hidden' }}
                        dataLength={apiNews.length}
                        next={fetchMoreData}
                        hasMore={apiNews.length !== totalArticles}
                        loader={<Spinner />}
                    >

                        <div className="row ">
                            {apiNews.map((val, index) =>
                                <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                    <NewsCard
                                        title={val.title ? val.title.slice(0, 35) : ''}
                                        description={val.description ? val.description.slice(0, 88) : ''}
                                        imgsrc={val.urlToImage}
                                        author={val.author}
                                        date={val.publishedAt}
                                        url={val.url}
                                        source={val.source.name}
                                        colors={colors}
                                        mode={mode}
                                    />
                                </div>
                            )}

                        </div>
                    </InfiniteScroll>

                </div>
            </div >
        </>
    )
}
