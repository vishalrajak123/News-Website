import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={5} country="in" category='general'></News>}/>
          <Route exact path="/business" element={<News key="business" pageSize={5} country="in" category='business'></News>}/>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={5} country="in" category='entertainment'></News>}/>
          <Route exact path="/general" element={<News key="general" pageSize={5} country="in" category='general'></News>}/>
          <Route exact path="/health" element={<News key="health" pageSize={5} country="in" category='health'></News>}/>
          <Route exact path="/science" element={<News key="cience" pageSize={5} country="in" category='science'></News>}/>
          <Route exact path="/sports" element={<News key="sports" pageSize={5} country="in" category='sports'></News>}/>
          <Route exact path="/technology" element={<News key="technology" pageSize={5} country="in" category='technology'></News>}/>
        </Routes>
      </div>
    )
  }
}



