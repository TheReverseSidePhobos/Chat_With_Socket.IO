import React, { useReducer } from 'react';
import io from 'socket.io-client';
import './App.scss';
import FormContainer from './components/FormContainer';
import socket from './components/socket';
import reducer from '../src/reducer';

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
  });

  const onLogin = ( obj ) => {
    dispatch({ 
      type: 'JOINED', 
      payload: obj 
    });
    socket.emit('ROOM:JOIN', obj);
  };

  console.log(state);
  return (
    <div className="container">
      <div className="wrapper">
        <main className="main"></main>
        {!state.joined && <FormContainer onLogin={onLogin} />}
      </div>
    </div>
  );
};

export default App;
