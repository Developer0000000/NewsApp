import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {

  let country = 'us';
  let pageSize = 5;
  let apiKey = process.env.REACT_APP_API_KEY;

  const [progress, setProgress] = useState(0);

  const [mode, setMode] = useState('light');
  const [btnText, setBtnText] = useState('Dark Mode');


  function toggleMode() {

    if (mode === 'light') {
      setMode('dark');
      setBtnText('Light Mode')
      document.body.style.background = 'black';
      document.body.style.color = 'snow';
    }
    else {
      setMode('light');
      setBtnText('Dark Mode');
      document.body.style.background = 'snow';
      document.body.style.color = 'black';
    }

  }


  return (
    <>
      <Navbar
        mode={mode}
        toggleMode={toggleMode}
        btnText={btnText}
      />

      <LoadingBar
        color='#f11946'
        progress={progress}
        height={3.3}
        loaderSpeed={1000}

      />

      <Routes>
        <Route exact path="/" element={<News mode={mode} apiKey={apiKey} setProgress={setProgress} country={country} pageSize={pageSize} colors='primary' category='general' key='general' />} />
        <Route exact path="/business" element={<News mode={mode} apiKey={apiKey} setProgress={setProgress} country={country} pageSize={pageSize} colors='secondary' category='business' key='business' />} />
        <Route exact path="/entertainment" element={<News mode={mode} apiKey={apiKey} setProgress={setProgress} country={country} pageSize={pageSize} colors='dark' category='entertainment' key='entertainment' />} />
        <Route exact path="/general" element={<News mode={mode} apiKey={apiKey} setProgress={setProgress} country={country} pageSize={pageSize} colors='primary' category='general' key='general' />} />
        <Route exact path="/health" element={<News mode={mode} apiKey={apiKey} setProgress={setProgress} country={country} pageSize={pageSize} colors='danger' category='health' key='health' />} />
        <Route exact path="/science" element={<News mode={mode} apiKey={apiKey} setProgress={setProgress} country={country} pageSize={pageSize} colors='warning' category='science' key='science' />} />
        <Route exact path="/sports" element={<News mode={mode} apiKey={apiKey} setProgress={setProgress} country={country} pageSize={pageSize} colors='success' category='sports' key='sports' />} />
        <Route exact path="/technology" element={<News mode={mode} apiKey={apiKey} setProgress={setProgress} country={country} pageSize={pageSize} colors='info' category='technology' key='technology' />} />
      </Routes>


    </>

  );
}

export default App;
