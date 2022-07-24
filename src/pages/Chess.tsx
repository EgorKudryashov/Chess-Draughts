import React, { useEffect, useState } from "react";
import "../App.css";
import BoardComponent from "../component/BoardComponent";
import LostFigures from "../component/LostFigures";
import Timer from "../component/Timer";
import { Board } from "../models/Board";
import { Colors } from "../models/Colors";
import { Player } from "../models/Player";

const Chess = () => {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart();
  }, []);

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFiguresChess();
    setBoard(newBoard);
    setCurrentPlayer(whitePlayer);
  };

  const swapPlayer = () => {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
    );
  };

  return (
    <div className="app">
      <Timer restart={restart} currentPlayer={currentPlayer} />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        <LostFigures title="Черные фигуры" figure={board.lostBlackFigures} />
        <LostFigures title="Белые фигуры" figure={board.lostWhiteFigures} />
      </div>
    </div>
  );
};

export default Chess;
