import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Profile from "./component/Profile";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profile/:nama" component={Profile} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
