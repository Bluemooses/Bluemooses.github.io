import React from "react";
import axios from "axios";

import "./App.scss";
import Header from "../Components/Header/Header";

import Footer from "../Components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <footer>
          <Header />
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
