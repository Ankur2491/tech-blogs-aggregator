import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Link, BrowserRouter as Router, Routes, useParams } from 'react-router-dom';
// import Individual from './individual';
// import Product from './product';
import Header from './Header';
function App() {
  const [items, setItems] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost:3050/feeds').then(response => response.text())
  //     .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  //     .then((xml) => xml.querySelectorAll('item'))
  //     .then((items) => {
  //       const feedItems = [...items].map((el) => ({
  //         link: el.querySelector("link").innerHTML,
  //         title: el.querySelector("title").innerHTML,
  //         description: el.querySelector("description").innerHTML
  //       }));
  //       setItems(feedItems);
  //     })
  //     .catch(err => console.error(err))
  // }, [])
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/:page" exact element={<Header/>} />
        <Route path="/" exact element={<Header/>}/>
        {/* <Route path='/home' exact element={<Home/>} />
        <Route path='/individual' exact element={<Individual/>} />
        <Route path='/product' exact element={<Product/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
