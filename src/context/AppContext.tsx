import { createContext, useContext, useEffect, useState } from "react";

type ContextType = {
  board: number[][];
  player1Score: number;
  player2Score: number;
  timer: number;
  gameOver: number;
  isPlayer1Turn: boolean;
  vsAi: boolean;
  isMobile: boolean;
  play: (column: number) => void;
  startVsCPU?: () => void;
  startVsPlayer?: () => void;
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
  gameOver: 0,
  isPlayer1Turn: true,
  vsAi: false,
  isMobile: false,
};

const AppContext = createContext<ContextType>(defaultState);

type PropsType = {
  children: JSX.Element[] | JSX.Element;
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
  const [gameOver, setGameOver] = useState(0);
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);
  const [vsAi, setVsAi] = useState(false);
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 640 : false;

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else {
      if (isPlayer1Turn) {
        setGameOver(2);
        setPlayer2Score((prev) => prev + 1);
      } else {
        setGameOver(1);
        setPlayer1Score((prev) => prev + 1);
      }
    }
    return () => clearInterval(interval);
  }, [isPlayer1Turn, timer]);

  const resetTimer = () => {
    setTimer(15);
  };

  const startVsCPU = () => {
    setVsAi(true);
  };

  const startVsPlayer = () => {
    setVsAi(false);
  };

  const checkWinCondition = () => {
    const checkLine = (a = 0, b = 0, c = 0, d = 0) => {
      return a != 0 && a == b && a == c && a == d;
    };
    return 0;
  };

  const play = (col: number) => {
    if (board[col][5] == 0 && !gameOver) {
      setBoard((prev) => {
        const current = [...prev];
        current[col] = [...prev[col]];
        for (let row = 0; row < current[col].length; row++) {
          if (current[col][row] == 0) {
            current[col][row] = isPlayer1Turn ? 1 : 2;
            break;
          }
        }
        return [...current];
      });
      const result = checkWinCondition();
      if (result) {
        setGameOver(result);
        result == 1
          ? setPlayer1Score((prev) => prev + 1)
          : setPlayer2Score((prev) => prev + 1);
      } else setIsPlayer1Turn((prev) => !prev);
    }
    resetTimer();
  };

  return (
    <AppContext.Provider
      value={{
        board,
        player1Score,
        player2Score,
        timer,
        isPlayer1Turn,
        gameOver,
        vsAi,
        isMobile,
        play,
        startVsCPU,
        startVsPlayer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
