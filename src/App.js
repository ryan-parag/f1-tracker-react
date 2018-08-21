import React, { Component } from 'react';
import Title from './components/Title/Title.js';

class App extends React.Component {
  state = {
    permanentNumber: 14,
    givenName: 'Fernando',
    familyName: 'Alonso',
    nationality: 'Spanish'
  }
  getData = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`http://ergast.com/api/f1/2018/drivers/alonso.json`);
    const data = await api_call.json();
  }
  render() {
    return (
      <div className="card">
        <Title />
        <span></span>
      </div>
    );
  }
}

export default App;
