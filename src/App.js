import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* hello this is my first react app using class based component  */}
        <Router>

        <Navbar/>
        
        <Routes>
          {/* <Route path="/"><News pageSize={6} country="in" category="general"/>  </Route> */}
          <Route exact path='/' element={<News key="general"  pageSize={6} country='in' category='general' />}></Route>
          <Route exact path='/business' element={<News key="business" pageSize={6} country='in' category='Business' />}></Route>
          <Route exact path='/entertainment' element={<News key="entertainment"  pageSize={6} country='in' category='Entertainment' />}></Route>
          <Route exact path='/health' element={<News key="health"  pageSize={6} country='in' category='health' />}></Route>
          <Route exact path='/Science' element={<News key="Science"  pageSize={6} country='in' category='Science' />}></Route>
          <Route exact path='/Technology' element={<News key="Technology"  pageSize={6} country='in' category='Technology' />}></Route>
          <Route exact path='/sports' element={<News key="sports"  pageSize={6} country='in' category='sports' />}></Route>

          {/*-----imp point-----
                jab mene router ka sara setup bana dia to mere componenet re mount nahi ho rhe the is lie mene exact ko lagaya or remount k lie ak unique key pass ki 

          */}

          {/* <Route path='/' element={<News pageSize={6} country='in' category='general' />}></Route> */}
        </Routes>
        </Router>
        {/* country string thi is lie "" is men hum ne use likha  */}
        {/* yahan par ab mene props ko pass kia he props ko passs kar k men yaahn se paage size ko handle kar sakta hon ab is ko mne newsitem men ja kar call kronga  */}
      </div>
    )
  }
}

