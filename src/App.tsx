import React from 'react';
//import './App.css';
import styled from 'styled-components';
import Game from './tic-tac-toe/Game';
import C4Game from './connect-four/C4Game';


const RootDiv = styled.div`
  text-align: center;
`;

function App() {
  return (
    <RootDiv>
      {/* <Game /> */}
      <C4Game />
    </RootDiv>
  );
}

export default App;
