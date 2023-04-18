import Image from "next/image";
import { useAppContext } from "~/context/AppContext";

const Board = () => {
  const { isMobile } = useAppContext();

  return (
    <div className="relative order-last h-[19.375rem] w-[20.9375rem] sm:order-none sm:h-[36.5rem] sm:w-[39.5rem]">
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
    </div>
  );
};

export default Board;
