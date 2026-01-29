import { useGame } from "../context/GameContext";
import Hole from "./Hole";

export default function Game() {
  const { score, restartGame, molePosition } = useGame();

  return (
    <>
      <h2>Score: {score}</h2>
      <button onClick={restartGame}>Restart</button>

      <section className="board">
        <Hole index={0} molePosition={molePosition} />
        <Hole index={1} molePosition={molePosition} />
        <Hole index={2} molePosition={molePosition} />
        <Hole index={3} molePosition={molePosition} />
        <Hole index={4} molePosition={molePosition} />
        <Hole index={5} molePosition={molePosition} />
        <Hole index={6} molePosition={molePosition} />
        <Hole index={7} molePosition={molePosition} />
        <Hole index={8} molePosition={molePosition} />
      </section>
    </>
  );
}