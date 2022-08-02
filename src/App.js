import React from "react";
import Routes from './Routes';
// import style
import './asset/scss/App.scss';

// import component
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App container">
      {/* header component */}
      <div className="link-bar">
        <Header></Header>
      </div>
      {/* main component */}
      <div className="mainApp py-5">
        <Routes />
      </div>
      {/* footer component */}
      <Footer></Footer>
    </div>
  )
}

export default App