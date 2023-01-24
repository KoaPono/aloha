import React from "react";
import styled from "styled-components";
import Board from "./Board";

const GameDiv = styled.div`
    display: flex;
    flex-direction: row;
`;
const GameBoardDiv = styled.div``;
const GameInfoDiv = styled.div`
    margin-left: 20px;
`;

class Game extends React.Component {
    render() {
      return (
        <GameDiv>
          <GameBoardDiv>
            <Board />
          </GameBoardDiv>
          <GameInfoDiv>
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </GameInfoDiv>
        </GameDiv>
      );
    }
  }

  export default Game;