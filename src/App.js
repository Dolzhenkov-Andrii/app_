import React, { useState } from "react";
import './css/style.css';
import Footer from './components/Footer'
import Header from "./components/Header";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Registration from "./components/Registration";
import Authorization from "./components/Authorization";

function App() {

  let user = {id:'1', username:'oscur1k', avatar:"avatr"}

  return (
    <div className="App">
      {/* <Modal/> */}
      <Header user={user}/>
      <Home />
      {/* <Registration/> */}
      {/* <Authorization/> */}
      <Footer />
    </div>
  );
}

export default App;
