import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import checkWinCondition from "~/library/checkWinCondition";

type ContextType = {
  board: number[][];
  player1Score: number;
  player2Score: number;
  timer: number;
  isPaused: boolean;
  gameOver: { winner: number; winningChips: string[] };
  player1Initiative: boolean;
  isPlayer1Turn: boolean;
  vsCPU: boolean;
  isMobile: boolean;
  start: (vsCPU: boolean) => void;
  play: (col: number) => void;
  restart: () => void;
  togglePause: () => void;
};

const defaultState = {
  board: [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  player1Score: 0,
  player2Score: 0,
  timer: 15,
  isPaused: false,
  gameOver: { winner: 0, winningChips: [] },
  player1Initiative: true,
  isPlayer1Turn: true,
  vsCPU: false,
  isMobile: false,
  start: function (_vsCPU: boolean) {
    return;
  },
  play: function (_col: number) {
    return;
  },
  restart: function () {
    return;
  },
  togglePause: function () {
    return;
  },
};

const AppContext = createContext<ContextType>(defaultState);

type PropsType = {
  children: JSX.Element[] | JSX.Element;
};

type GameOverType = {
  winner: number;
  winningChips: string[];
};

export const AppContextProvider = ({ children }: PropsType) => {
  const [board, setBoard] = useState<number[][]>([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ]);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [timer, setTimer] = useState(15);
  const [isPaused, setIsPaused] = useState(false);
  const [gameOver, setGameOver] = useState<GameOverType>({
    winner: 0,
    winningChips: [],
  });
  const [player1Initiative, setPlayer1Initiative] = useState(true);
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);
  const [vsCPU, setVsCPU] = useState(false);
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 640 : false;

  const play = useCallback(
    (col: number) => {
      if (board?.[col]?.[5] == 0 && !gameOver.winner) {
        setBoard((prev) => {
          const current = [...prev];
          current[col] = [...prev[col]];
          for (let row = 0; row < current?.[col].length; row++) {
            if (current?.[col]?.[row] == 0) {
              current[col][row] = isPlayer1Turn ? 1 : 2;
              break;
            }
          }
          return [...current];
        });
        setIsPlayer1Turn((prev) => !prev);
        setTimer(15);
      }
    },
    [board, gameOver.winner, isPlayer1Turn]
  );

  const cpuAction = useCallback(() => {
    let col: number;
    do {
      col = Math.floor(Math.random() * 6);
    } while (board?.[col]?.[5] != 0);
    setTimeout(() => {
      play(col);
    }, 500);
  }, [board, play]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (timer && !isPaused) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (!timer && !gameOver.winner) {
      if (isPlayer1Turn) {
        setGameOver((prev) => ({
          ...prev,
          winner: 2,
        }));
        setPlayer2Score((prev) => prev + 1);
      } else {
        setGameOver((prev) => ({
          ...prev,
          winner: 1,
        }));
        setPlayer1Score((prev) => prev + 1);
      }
      setPlayer1Initiative((prev) => !prev);
    }
    return () => clearInterval(interval);
  }, [gameOver.winner, isPaused, isPlayer1Turn, timer]);

  useEffect(() => {
    const { winner, winningChips } = checkWinCondition(board);
    if (winner && !gameOver.winner) {
      setGameOver({
        winner,
        winningChips,
      });
      setPlayer1Initiative((prev) => !prev);
      winner == 1
        ? setPlayer1Score((prev) => prev + 1)
        : setPlayer2Score((prev) => prev + 1);
    } else if (!isPlayer1Turn && vsCPU) cpuAction();
  }, [board, cpuAction, gameOver.winner, isPlayer1Turn, vsCPU]);

  const start = (vsCPU: boolean) => {
    setBoard([
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ]);
    setPlayer1Initiative(true);
    setIsPlayer1Turn(true);
    setPlayer1Score(0);
    setPlayer2Score(0);
    setIsPaused(false);
    setTimer(15);
    setGameOver({
      winner: 0,
      winningChips: [],
    });
    setVsCPU(vsCPU);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  const restart = () => {
    setBoard([
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ]);
    setTimer(15);
    setGameOver({
      winner: 0,
      winningChips: [],
    });
    setIsPlayer1Turn(player1Initiative);
  };

  return (
    <AppContext.Provider
      value={{
        board,
        player1Score,
        player2Score,
        timer,
        isPaused,
        player1Initiative,
        isPlayer1Turn,
        gameOver,
        vsCPU,
        isMobile,
        start,
        play,
        togglePause,
        restart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
