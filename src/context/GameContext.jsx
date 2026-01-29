import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [screen, setScreen] = useState("welcome");
  const [score, setScore] = useState(0);
  const [molePosition, setMolePosition] = useState(0);

  const startGame = () => {
    setScore(0);
    setMolePosition(Math.floor(Math.random() * 9));
    setScreen("game");
  };

  const restartGame = () => {
    setScreen("welcome");
    setScore(0);
    setMolePosition(Math.floor(Math.random() * 9));
  };

  const whackMole = () => {
    setScore(score + 1);
    setMolePosition(Math.floor(Math.random() * 9));
  };

  return (
    <GameContext.Provider
      value={{
        screen,
        score,
        molePosition,
        startGame,
        restartGame,
        whackMole,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}