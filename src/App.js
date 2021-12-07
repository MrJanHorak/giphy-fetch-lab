import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';
import Gif from './gif';


function App() {
const [gifData, setGifData] = useState ('');
const [gifSearch, setGifSearch] = useState ('Hello Friend')

const handleSubmit = search => {
  setGifSearch(search)
};

useEffect(() => {
  let gifUrl = `https://api.giphy.com/v1/gifs/random?api_key=BSuS1MwWdqU3HsuybpnffX5nsNqOXOwt&tag=${gifSearch}`;

  const makeApiCall = () => {
    fetch(gifUrl)
    .then(res => res.json())
    .then(data => {
      console.log('Data', data)
      setGifData(data)
    })
  }
  makeApiCall()
}, [gifSearch])

function gifSource() {
  console.log('gifsource',gifData)
}
gifSource()
  return (
    <>
    <div className="App">
      <h1>Giphy-Fetch-Lab</h1>
      <Form  handleSubmit={handleSubmit}/>
      <br />
      {gifData ? <Gif gif={gifData} /> : null }
    </div>
    </>
  );
}

export default App;
