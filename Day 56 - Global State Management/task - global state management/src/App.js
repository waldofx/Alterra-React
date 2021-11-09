import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About1 from "./pages/About1";
import About2 from "./pages/About2";
import NotFound from "./pages/NotFound";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about/about-app" component={About1} />
                        <Route path="/about/about-author" component={About2} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
