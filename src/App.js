import React from 'react';
import './App.css';
import Cars from './Cars';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
	<ContextProvider>
    <Cars />
	</ContextProvider>
  );
}

export default App;
