import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import axios from "axios";
import { useRoutes } from "hookrouter";
import Routes from "../Components/Router/Router";
import "./App.scss";
import Header from "../Components/Header/Header";
import About from "../Components/About/About";

import Footer from "../Components/Footer/Footer";
import Body from "../Components/Body/Body";
import Nav from "../Components/Nav/Nav";
import Mission from "../Components/Mission/Mission";
const App = (props) => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/mission">
            <Mission />
          </Route>
        </Switch>
        <Route path="/">
          <Header />
          <Nav />
          <Body />
          <Footer />
        </Route>
      </Router>
    </div>
  );
};

export default App;
