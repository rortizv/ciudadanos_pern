import React, { Fragment } from 'react';
import './App.css';

import Navbar from './components/navbar/navbar.js';

import InputProvincia from "./components/provincia/InputProvincia";
import ListProvincia from "./components/provincia/ListProvincia";
import EditProvincia from "./components/provincia/EditProvincia";

import InputPersona from "./components/persona/InputPersona";
import ListPersona from "./components/persona/ListPersona";
import EditPersona from "./components/persona/EditPersona";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path="/components/provincia/" component={ListProvincia} />
          <Route path="/components/persona/" component={ListPersona} />
        </Switch>
    </Router>
  );
}

export default App;


//components

/*import InputProvincia from "./components/provincia/InputProvincia";
import ListProvincia from "./components/provincia/ListProvincia";
import EditProvincia from "./components/provincia/EditProvincia";

import InputPersona from "./components/persona/InputPersona";
import ListPersona from "./components/persona/ListPersona";
import EditPersona from "./components/persona/EditPersona";*/

    // <Fragment>
    //   <div className="container">
    //     <InputProvincia />
    //     <ListProvincia />
    //   </div>
    // </Fragment>
