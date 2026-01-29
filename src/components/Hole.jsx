import { useGame } from "../context/GameContext";

export default function Hole({ index, molePosition }) {
  const { whackMole } = useGame();
  const isMole = index === molePosition;

  return (
    <button
      className={`hole ${isMole ? "mole" : ""}`}
      aria-label="hole"
      onClick={() => {
        if (isMole) whackMole();
      }}
    />
  );
}