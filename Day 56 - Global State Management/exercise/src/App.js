import "./App.css"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './component/Home';
import Profile from './component/Profile';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/profile/:nama' component={Profile}/>
        </Switch>
      </BrowserRouter>
    </PersistGate>
    </Provider>
    
  );
}

export default App;


{/* <div className="App">
      <Home/>
    </div> */}