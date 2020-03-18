import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './components/dashboard'
import Loading from './components/loading'
import Tambahpengajuan from './components/tambahPengajuan'
import { Provider } from "react-redux";
import store from "./redux/store";


function App() {
  return (
    <Provider store={store}>
    <Loading />
    <Router>
    <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/pengajuan">
          <Tambahpengajuan />
        </Route>
    </Switch>
    </Router>
    </Provider>
  );
}

export default App;
