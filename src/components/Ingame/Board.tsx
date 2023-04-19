import Image from "next/image";
import { useState } from "react";
import { useAppContext } from "~/context/AppContext";

const Board = () => {
  const { isMobile, isPlayer1Turn, play } = useAppContext();
  let indicatorText = "";
  let indicatorBg = "";
  let markerSrc = "";
  const [markerPosition, setMarkerPosition] = useState("lg:hidden");
  if (isPlayer1Turn) {
    indicatorText = "PLAYER 1'S TURN";
    indicatorBg = "bg-[url('/images/turn-background-red.svg')]";
    markerSrc = "images/marker-red.svg";
  } else {
    indicatorText = "PLAYER 2'S TURN";
    indicatorBg = "bg-[url('/images/turn-background-yellow.svg')]";
    markerSrc = "images/marker-yellow.svg";
  }
  const handleOnMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const currentTargetRect = event.currentTarget.getBoundingClientRect();
    const event_offsetX = event.pageX - currentTargetRect.left;
    switch (true) {
      case event_offsetX > 17 && 105 > event_offsetX:
        setMarkerPosition("left-[calc(17px+88px*0)]");
        break;
      case event_offsetX > 105 && 193 > event_offsetX:
        setMarkerPosition("left-[calc(17px+88px*1)]");
        break;
      case event_offsetX > 193 && 281 > event_offsetX:
        setMarkerPosition("left-[calc(17px+88px*2)]");
        break;
      case event_offsetX > 281 && 369 > event_offsetX:
        setMarkerPosition("left-[calc(17px+88px*3)]");
        break;
      case event_offsetX > 369 && 457 > event_offsetX:
        setMarkerPosition("left-[calc(17px+88px*4)]");
        break;
      case event_offsetX > 457 && 545 > event_offsetX:
        setMarkerPosition("left-[calc(17px+88px*5)]");
        break;
      case event_offsetX > 545 && 633 > event_offsetX:
        setMarkerPosition("left-[calc(17px+88px*6)]");
        break;
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const currentTargetRect = event.currentTarget.getBoundingClientRect();
    const event_offsetX = event.pageX - currentTargetRect.left;
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
  };

  return (
    <div
      className="relative order-last h-[19.375rem] w-[20.9375rem] cursor-pointer sm:order-none sm:h-[36.5rem] sm:w-[39.5rem]"
      onMouseLeave={() => setMarkerPosition("left-[-99rem]")}
      onMouseMove={handleOnMouseMove}
      onClick={handleClick}
    >
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
      />
      <div
        className="absolute bottom-[calc(27px+47px*5)] left-[calc(9px+46.5px*6)] z-20
          h-[40px] w-[38px] sm:bottom-[calc(52px+88px*5)] sm:left-[calc(17px+88px*6)] sm:h-[75px] sm:w-[70px]"
      >
        <Image
          src={
            isMobile
              ? "images/counter-red-small.svg"
              : "images/counter-red-large.svg"
          }
          alt="Chip"
          fill
        />
      </div>
      <div
        className={`absolute bottom-0 left-1/2 z-40 h-[9.375rem] w-[11.9375rem]
      translate-x-[-50%] translate-y-[90%] py-[2.5rem] text-center
      ${indicatorBg} bg-[length:11.9375rem_9.375rem]`}
      >
        <h3 className="text-xs font-bold">{indicatorText}</h3>
        <h2 className="text-lg font-bold">15s</h2>
      </div>
      <Image
        src={markerSrc}
        alt="Active Column Marker"
        height={26}
        width={32}
        className={`absolute ${markerPosition} top-0 hidden translate-x-[60%] translate-y-[-100%] lg:block`}
      />
    </div>
  );
};

export default Board;
