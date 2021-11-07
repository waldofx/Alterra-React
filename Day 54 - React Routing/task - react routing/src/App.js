import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About1 from "./pages/About1";
import About2 from "./pages/About2";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about/about-app" component={About1} />
                    <Route path="/about/about-author" component={About2} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
