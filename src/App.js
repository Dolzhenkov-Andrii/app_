import React, { useState } from "react";
import './css/style.css';
import Footer from './components/Footer'
import Header from "./components/Header";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Registration from "./components/Registration";

function App() {

  return (
    <div className="App">
      {/* <Modal/> */}
      <Header />
      {/* <Home /> */}
      <Registration/>
      <Footer />
    </div>
  );
}

export default App;
