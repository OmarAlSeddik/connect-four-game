import { useAppContext } from "~/context/AppContext";

const TurnIndicator = () => {
  const { isPlayer1Turn, timer, gameOver, restart } = useAppContext();
  let indicatorText = "";
  let indicatorBg = "";
  if (isPlayer1Turn) {
    indicatorText = "PLAYER 1'S TURN";
    indicatorBg = "bg-[url('/images/turn-background-red.svg')]";
  } else {
    indicatorText = "PLAYER 2'S TURN";
    indicatorBg = "bg-[url('/images/turn-background-yellow.svg')]";
  }

  if (gameOver.winner)
    return (
      <div
        className="absolute bottom-0 left-1/2 z-40 flex h-[10rem] w-[17.8125rem]
        translate-x-[-50%] translate-y-[90%] flex-col items-center justify-center rounded-[1.25rem]
        border-[3px] border-black bg-white text-center shadow-custom"
      >
        <h3
          className={`text-xs font-bold ${
            gameOver.winner === 3 ? "hidden" : ""
          }`}
        >
          {gameOver.winner === 1 ? "PLAYER 1" : "PLAYER 2"}
        </h3>
        <h2 className="text-lg font-bold">
          {gameOver.winner === 3 ? "TIE" : "WINS"}
        </h2>
        <button
          className="rounded-[1.25rem] bg-cDark px-[1rem] py-[0.5rem] text-xs
        font-bold text-white transition-all hover:bg-cRed"
          onClick={restart}
        >
          PLAY AGAIN
        </button>
      </div>
    );

  return (
    <div
      className={`absolute bottom-0 left-1/2 z-40 h-[9.375rem] w-[11.9375rem]
translate-x-[-50%] translate-y-[90%] py-[2.5rem] text-center
${indicatorBg} bg-[length:11.9375rem_9.375rem]`}
    >
      <h3 className="text-xs font-bold">{indicatorText}</h3>
      <h2 className="text-lg font-bold">{timer}s</h2>
    </div>
  );
};

export default TurnIndicator;
