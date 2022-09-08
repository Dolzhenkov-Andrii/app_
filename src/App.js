import React, { useState } from "react";
import './css/style.css';
import Footer from './components/Footer';
import Header from "./components/Header";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Registration from "./components/Registration";
import Authorization from "./components/Authorization";

import { Route, Routes } from 'react-router-dom'


function App() {

  const user = { id: '1', username: 'oscur1k', avatar: "avatr" }



  return (
    <div className="App">
      {/* <Modal/> */}
      <Header user={user} />
      <Routes>
        <Route path="/" exact element={<Authorization/>}/>
        <Route path="/home" exact element={<Home/>}/>
        <Route path="/regist" exact element={<Registration/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
