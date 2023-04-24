import Image from "next/image";
import { useState } from "react";
import { useAppContext } from "~/context/AppContext";
import Chip from "./Chip";
import Marker from "./Marker";
import TurnIndicator from "./TurnIndicator";

const Board = () => {
  const { isMobile, play, board, vsCPU, isPlayer1Turn } = useAppContext();
  const [markerPosition, setMarkerPosition] = useState("lg:hidden");

  const handleOnMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const currentTargetRect = event.currentTarget.getBoundingClientRect();
    const event_offsetX = event.pageX - currentTargetRect.left;
    switch (true) {
      case event_offsetX > 17 && 105 > event_offsetX:
        setMarkerPosition("left-[calc(35px+88px*0)]");
        break;
      case event_offsetX > 105 && 193 > event_offsetX:
        setMarkerPosition("left-[calc(35px+88px*1)]");
        break;
      case event_offsetX > 193 && 281 > event_offsetX:
        setMarkerPosition("left-[calc(35px+88px*2)]");
        break;
      case event_offsetX > 281 && 369 > event_offsetX:
        setMarkerPosition("left-[calc(35px+88px*3)]");
        break;
      case event_offsetX > 369 && 457 > event_offsetX:
        setMarkerPosition("left-[calc(35px+88px*4)]");
        break;
      case event_offsetX > 457 && 545 > event_offsetX:
        setMarkerPosition("left-[calc(35px+88px*5)]");
        break;
      case event_offsetX > 545 && 633 > event_offsetX:
        setMarkerPosition("left-[calc(35px+88px*6)]");
        break;
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const currentTargetRect = event.currentTarget.getBoundingClientRect();
    const event_offsetX = event.pageX - currentTargetRect.left;
    if (!(vsCPU && !isPlayer1Turn)) {
      if (isMobile) {
        switch (true) {
          case event_offsetX > 9 && 55.6 > event_offsetX:
            play(0);
            break;
          case event_offsetX > 55.6 && 102.2 > event_offsetX:
            play(1);
            break;
          case event_offsetX > 102.2 && 148.8 > event_offsetX:
            play(2);
            break;
          case event_offsetX > 148.8 && 195.4 > event_offsetX:
            play(3);
            break;
          case event_offsetX > 195.4 && 242 > event_offsetX:
            play(4);
            break;
          case event_offsetX > 242 && 288.6 > event_offsetX:
            play(5);
            break;
          case event_offsetX > 288.6 && 335.2 > event_offsetX:
            play(6);
            break;
        }
      } else {
        switch (true) {
          case event_offsetX > 17 && 105 > event_offsetX:
            play(0);
            break;
          case event_offsetX > 105 && 193 > event_offsetX:
            play(1);
            break;
          case event_offsetX > 193 && 281 > event_offsetX:
            play(2);
            break;
          case event_offsetX > 281 && 369 > event_offsetX:
            play(3);
            break;
          case event_offsetX > 369 && 457 > event_offsetX:
            play(4);
            break;
          case event_offsetX > 457 && 545 > event_offsetX:
            play(5);
            break;
          case event_offsetX > 545 && 633 > event_offsetX:
            play(6);
            break;
        }
      }
    }
  };

  return (
    <div className="relative h-[19.375rem] w-[20.9375rem] cursor-pointer sm:order-none sm:h-[36.5rem] sm:w-[39.5rem]">
      <Image
        src={
          isMobile
            ? "images/board-layer-black-small.svg"
            : "images/board-layer-black-large.svg"
        }
        alt="Board"
        width={isMobile ? 335 : 632}
        height={isMobile ? 310 : 584}
        className="absolute z-10"
      />
      <Image
        src={
          isMobile
            ? "images/board-layer-white-small.svg"
            : "images/board-layer-white-large.svg"
        }
        alt="Board"
        width={isMobile ? 335 : 632}
        height={isMobile ? 310 : 584}
        className="absolute z-30"
        onMouseLeave={() => setMarkerPosition("lg:hidden")}
        onMouseMove={handleOnMouseMove}
        onClick={handleClick}
      />
      <TurnIndicator />
      <Marker markerPosition={markerPosition} />
      {board.map((col, i) =>
        col
          .filter((chip) => chip != 0)
          .map((chip, j) => (
            <Chip
              key={`${i}${j}`}
              col={i}
              row={j}
              color={chip === 1 ? "red" : "yellow"}
            />
          ))
      )}
    </div>
  );
};

export default Board;
