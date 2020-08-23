import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import styled from 'styled-components'
import AddTransaction from './components/AddTransaction';

const MainDiv= styled.div`
  height: 100%;
  width: 100%;
`

function App() {
  return (
    <MainDiv>
    <Switch>
      <Route exact path="/"  component={Home}/>
      <Route path="/addtransaction" component={AddTransaction} />
    </Switch>
    </MainDiv>
  );
}

export default App;
