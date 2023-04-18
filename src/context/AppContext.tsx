import { createContext, useContext, useState } from "react";

type ContextType = {
  board: string[][];
  player1Score: number;
  player2Score: number;
  isPlayer1Turn: boolean;
  player1IsRed: boolean;
  vsAi: boolean;
  isMobile: boolean;
};

const defaultState = {
  board: [[], [], [], [], [], [], []],
  player1Score: 0,
  player2Score: 0,
  isPlayer1Turn: true,
  player1IsRed: true,
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
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);
  const [player1IsRed, setPlayer1IsRed] = useState(true);
  const [vsAi, setVsAi] = useState(false);
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 640 : false;

  const play = (column: number) => {
    if (column < 7 && board[column]?.length < 6) {
      if (isPlayer1Turn) {
        player1IsRed
          ? board[column]?.push("red")
          : board[column]?.push("yellow");
      } else {
        player1IsRed
          ? board[column]?.push("yellow")
          : board[column]?.push("red");
      }
      setIsPlayer1Turn((prev) => !prev);
    }
  };

  return (
    <AppContext.Provider
      value={{
        board,
        player1Score,
        player2Score,
        isPlayer1Turn,
        player1IsRed,
        vsAi,
        isMobile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
