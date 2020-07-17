import React from "react";
import axios from "axios";

import "./App.scss";
import Header from "../Components/Header/Header";

import Footer from "../Components/Footer/Footer";
import Body from "../Components/Body/Body";

const App = () => {
  {
    return (
      <div className="app">
        <footer>
          <Header />
          <Body />
          <Footer />
        </footer>
      </div>
    );
  }
};

export default App;
