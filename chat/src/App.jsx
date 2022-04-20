import React from 'react';
import io from 'socket.io-client';
import './App.scss';
import socket from './components/socket';

const App = () => {
  const connect = (e) => {
    //e.preventDefault();
  };
  return (
    <div className="container">
      <div className="wrapper">
        <main className="main"></main>
        <div className="formContainer">
          <form className="form">
            <input type="text" className="input" placeholder="room number" />
            <input type="text" className="input" placeholder="your name" />
            <button className="btn" onClick={(e) => connect(e)}>
              Connect
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
