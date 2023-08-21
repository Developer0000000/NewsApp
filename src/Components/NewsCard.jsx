import React from 'react'

export default function NewsCard(props) {

    let appStyle = {
        background: 'black',
        color: 'snow',
    }

    let { title, description, imgsrc, author, date, url, source, colors, mode } = props

    let dummyImg = 'https://picsum.photos/200/115';
    let defaultDescription = `North Korea's position as a nuclear weapons state will remain undeniable and it will continue to build its forces until military threats from the United States`;
    let defaultTitle = `North Korea accuses G7 of interfere`;

    let defaultAuthor = `Unknown`;
    let defaultDate = `Unknown`;

    return (
        <>
            <div className="card mb-5" style={{ width: '20rem', marginTop: '0.7rem' }}>
                <span style={{ left: '88%' }} className={`position-absolute top-0 translate-middle badge rounded-pill bg-${colors}`}>{source}</span>
                <img src={!imgsrc ? dummyImg : imgsrc} className="card-img-top" alt="news" />
                <div className={"card-body"} style={mode === 'light' ? null : appStyle}>
                    <h5 className="card-title">{!title ? defaultTitle : title}....</h5>
                    <p className="card-text">{!description ? defaultDescription.slice(0, 88) : description}....</p>
                    <p className="card-text"><small className={` ${mode === 'light' ? `text-body-secondary` : ' text-info'}`}>By {!author ? defaultAuthor : author} on {!date ? defaultDate : new Date(date).toGMTString()} </small></p>
                    <a href={url} className={`${mode === 'light' ? `btn btn-dark` : ' btn btn-primary'}`}>Read More</a>
                </div>
            </div>
        </>
    )
}
