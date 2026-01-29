import { useGame } from "../context/GameContext";

export default function Welcome() {
  const { startGame } = useGame();

  return (
    <>
      <h1>Whack a Mole</h1>
      <p>Click the mole to score points!</p>
      <button onClick={startGame}>Play</button>
    </>
  );
}