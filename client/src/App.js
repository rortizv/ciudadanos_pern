import React, { Fragment } from 'react';
import './App.css';

//components

import InputProvincia from "./components/provincia/InputProvincia";
import ListProvincia from "./components/provincia/ListProvincia";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputProvincia />
        <ListProvincia />
      </div>
    </Fragment>
  );
}

export default App;
