import { createContext, useContext, useState } from "react";

type ContextType = {
  board: string[][];
  player1Score: number;
  player2Score: number;
  isPlayer1Turn: boolean;
  vsAi: boolean;
  isMobile: boolean;
  play: (column: number) => void;
  startVsCPU?: () => void;
  startVsPlayer?: () => void;
};

const defaultState = {
  board: [[], [], [], [], [], [], []],
  player1Score: 0,
  player2Score: 0,
  isPlayer1Turn: true,
  vsAi: false,
  isMobile: false,
};

const AppContext = createContext<ContextType>(defaultState);

type PropsType = {
  children: JSX.Element[] | JSX.Element;
};

export const AppContextProvider = ({ children }: PropsType) => {
  const [board, setBoard] = useState<string[][]>([[], [], [], [], [], [], []]);
  const [player1Score, setPlayer1Score] = useState(15);
  const [player2Score, setPlayer2Score] = useState(23);
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(false);
  const [vsAi, setVsAi] = useState(false);
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 640 : false;

  const play = (col: number) => {
    setBoard((prev) => {
      const current = [...prev];
      current[col] = [...prev[col]];
      current[col][current[col].length] = isPlayer1Turn ? "red" : "yellow";
      setIsPlayer1Turn((prev) => !prev);
      return [...current];
    });
  };

  const startVsCPU = () => {
    setVsAi(true);
  };

  const startVsPlayer = () => {
    setVsAi(false);
  };

  return (
    <AppContext.Provider
      value={{
        board,
        player1Score,
        player2Score,
        isPlayer1Turn,
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
