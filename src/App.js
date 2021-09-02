import React from 'react';
import { GlobalStyle } from './global-style';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SimulationCard from './components/SimulationCard';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Header />
      <SimulationCard />
    </>
  );
}

export default App;
