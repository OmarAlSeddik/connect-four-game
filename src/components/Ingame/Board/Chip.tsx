import Image from "next/image";
import { useAppContext } from "~/context/AppContext";

const Chip = ({
  col,
  row,
  color,
}: {
  col: number;
  row: number;
  color: string;
}) => {
  const { isMobile, gameOver } = useAppContext();
  let xPosition = "";
  let yPosition = "";
  switch (row) {
    case 0:
      yPosition = "bottom-[calc(24px+46.8px*0)] sm:bottom-[calc(52px+88px*0)]";
      break;
    case 1:
      yPosition = "bottom-[calc(24px+46.8px*1)] sm:bottom-[calc(52px+88px*1)]";
      break;
    case 2:
      yPosition = "bottom-[calc(24px+46.8px*2)] sm:bottom-[calc(52px+88px*2)]";
      break;
    case 3:
      yPosition = "bottom-[calc(24px+46.8px*3)] sm:bottom-[calc(52px+88px*3)]";
      break;
    case 4:
      yPosition = "bottom-[calc(24px+46.8px*4)] sm:bottom-[calc(52px+88px*4)]";
      break;
    case 5:
      yPosition = "bottom-[calc(24px+46.8px*5)] sm:bottom-[calc(52px+88px*5)]";
      break;
  }
  switch (col) {
    case 0:
      xPosition = "left-[calc(7px+46.8px*0)] sm:left-[calc(17px+88px*0)]";
      break;
    case 1:
      xPosition = "left-[calc(7px+46.8px*1)] sm:left-[calc(17px+88px*1)]";
      break;
    case 2:
      xPosition = "left-[calc(7px+46.8px*2)] sm:left-[calc(17px+88px*2)]";
      break;
    case 3:
      xPosition = "left-[calc(7px+46.8px*3)] sm:left-[calc(17px+88px*3)]";
      break;
    case 4:
      xPosition = "left-[calc(7px+46.8px*4)] sm:left-[calc(17px+88px*4)]";
      break;
    case 5:
      xPosition = "left-[calc(7px+46.8px*5)] sm:left-[calc(17px+88px*5)]";
      break;
    case 6:
      xPosition = "left-[calc(7px+46.8px*6)] sm:left-[calc(17px+88px*6)]";
      break;
  }

  return (
    <div
      className={`absolute ${xPosition} ${yPosition} z-20 h-[45px] w-[40px] sm:h-[75px] sm:w-[70px]`}
    >
      {gameOver.winningChips.includes(`${col} ${row}`) && (
        <div
          className="absolute z-30 h-[1.25rem] w-[1.25rem] translate-x-[50%] translate-y-[50%]
      rounded-[50%] border-[6px] border-white sm:h-[2.125rem] sm:w-[2.125rem]"
        />
      )}
      <Image
        src={
          isMobile
            ? `images/counter-${color}-small.svg`
            : `images/counter-${color}-large.svg`
        }
        alt="Chip"
        fill
      />
    </div>
  );
};

export default Chip;
