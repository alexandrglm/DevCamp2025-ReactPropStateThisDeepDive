import React, { Component } from 'react';

// 5. Venimos de crear el componente journal-list.js
import JournalList from './journal-list';

export default class App extends Component {
  
  render() {
  
    return (
      <div className='app'>
        <h1>REACT "props" & "state" deep dive</h1>
        
        {/* 6.  CALLBACK EFECTIVO A NUESTRO COMPONENTE */}
        <JournalList />
      </div>
  
    );
  }
}