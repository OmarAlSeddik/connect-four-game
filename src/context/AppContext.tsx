import { createContext, useContext, useEffect, useState } from "react";

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
  }, [gameOver, isPaused, isPlayer1Turn, timer]);

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

  useEffect(() => {
    const checkWinCondition = () => {
      const checkLine = (a = 0, b = 0, c = 0, d = 0) => {
        return a != 0 && a == b && a == c && a == d;
      };
      for (let col = 0; col < 4; col++) {
        for (let row = 0; row < 6; row++) {
          if (
            checkLine(
              board?.[col]?.[row],
              board?.[col + 1]?.[row],
              board?.[col + 2]?.[row],
              board?.[col + 3]?.[row]
            )
          ) {
            setGameOver((prev) => ({
              ...prev,
              winningChips: [
                `${col} ${row}`,
                `${col + 1} ${row}`,
                `${col + 2} ${row}`,
                `${col + 3} ${row}`,
              ],
            }));
            return board?.[col]?.[row];
          }
        }
      }
      for (let col = 0; col < 7; col++) {
        for (let row = 0; row < 3; row++) {
          if (
            checkLine(
              board?.[col]?.[row],
              board?.[col]?.[row + 1],
              board?.[col]?.[row + 2],
              board?.[col]?.[row + 3]
            )
          ) {
            setGameOver((prev) => ({
              ...prev,
              winningChips: [
                `${col} ${row}`,
                `${col} ${row + 1}`,
                `${col} ${row + 2}`,
                `${col} ${row + 3}`,
              ],
            }));
            return board?.[col]?.[row];
          }
        }
      }
      for (let col = 0; col < 4; col++) {
        for (let row = 0; row < 3; row++) {
          if (
            checkLine(
              board?.[col]?.[row],
              board?.[col + 1]?.[row + 1],
              board?.[col + 2]?.[row + 2],
              board?.[col + 3]?.[row + 3]
            )
          ) {
            setGameOver((prev) => ({
              ...prev,
              winningChips: [
                `${col} ${row}`,
                `${col + 1} ${row + 1}`,
                `${col + 2} ${row + 2}`,
                `${col + 3} ${row + 3}`,
              ],
            }));
            return board?.[col]?.[row];
          }
        }
      }
      for (let col = 3; col < 7; col++) {
        for (let row = 0; row < 3; row++) {
          if (
            checkLine(
              board?.[col]?.[row],
              board?.[col - 1]?.[row + 1],
              board?.[col - 2]?.[row + 2],
              board?.[col - 3]?.[row + 3]
            )
          ) {
            setGameOver((prev) => ({
              ...prev,
              winningChips: [
                `${col} ${row}`,
                `${col - 1} ${row + 1}`,
                `${col - 2} ${row + 2}`,
                `${col - 3} ${row + 3}`,
              ],
            }));
            return board?.[col]?.[row];
          }
        }
      }
      return 0;
    };
    const result = checkWinCondition();
    if (result) {
      setGameOver((prev) => ({
        ...prev,
        winner: result,
      }));
      setPlayer1Initiative((prev) => !prev);
      result == 1
        ? setPlayer1Score((prev) => prev + 1)
        : setPlayer2Score((prev) => prev + 1);
    }
  }, [board]);

  const play = (col: number) => {
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
