import React, { useState } from 'react';
import axios from 'axios';

const FormContainer = ({ onLogin }) => {
  const [roomId, setRoomId] = useState('');
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const connect = async (e) => {
    try {
      e.preventDefault();
      const obj = {
        roomId,
        userName
      }
      setIsLoading(true);
      await axios
        .post('/rooms', obj);
        onLogin(obj);
      
    } catch (e) {
      throw new Error(e)
    }
    if (!roomId || !userName) {
      return alert('Wrong input data');
    }
  };

  return (
    <div className="formContainer">
      <form className="form">
        <input
          type="text"
          className="input"
          onChange={(e) => setRoomId(e.target.value)}
          value={roomId}
          placeholder="room number"
        />
        <input
          type="text"
          className="input"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          placeholder="your name"
        />
        <button
          disabled={isLoading}
          className="btn"
          onClick={(e) => connect(e)}
        >
          {isLoading ? 'Connecting...' : 'Connect'}
        </button>
      </form>
    </div>
  );
};

export default FormContainer;
