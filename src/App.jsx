import { GameProvider, useGame } from "./context/GameContext";
import Welcome from "./components/Welcome";
import Game from "./components/Game";

function AppContent() {
  const { screen } = useGame();

  if (screen === "welcome") {
    return <Welcome />;
  }

  return <Game />;
}


export default function App() {
  return <>
  <GameProvider>
      <AppContent />
    </GameProvider>
  </>;
  
}
