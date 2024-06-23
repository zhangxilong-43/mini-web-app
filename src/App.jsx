import { HashRouter } from 'react-router-dom';
import React, { useEffect } from 'react';
import Routes from './Routes';


function App() {

  useEffect(() => {
    console.log('app-01');
  }, [])

  return (
    <Routes />
  );
}

export default App;
