import React, { useState } from "react";
import './css/style.css';
import Footer from './components/Footer'
import Header from "./components/Header";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Registration from "./components/Registration";
import Authorization from "./components/Authorization";

function App() {

  return (
    <div className="App">
      {/* <Modal/> */}
      <Header />
      <Home />
      {/* <Registration/> */}
      {/* <Authorization/> */}
      <Footer />
    </div>
  );
}

export default App;
