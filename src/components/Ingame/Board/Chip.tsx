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
  const { isMobile } = useAppContext();
  let xPosition = "";
  let yPosition = "";
  switch (row) {
    case 0:
      yPosition = "bottom-[calc(27px+46.6px*0)] sm:bottom-[calc(52px+88px*0)]";
      break;
    case 1:
      yPosition = "bottom-[calc(27px+46.6px*1)] sm:bottom-[calc(52px+88px*1)]";
      break;
    case 2:
      yPosition = "bottom-[calc(27px+46.6px*2)] sm:bottom-[calc(52px+88px*2)]";
      break;
    case 3:
      yPosition = "bottom-[calc(27px+46.6px*3)] sm:bottom-[calc(52px+88px*3)]";
      break;
    case 4:
      yPosition = "bottom-[calc(27px+46.6px*4)] sm:bottom-[calc(52px+88px*4)]";
      break;
    case 5:
      yPosition = "bottom-[calc(27px+46.6px*5)] sm:bottom-[calc(52px+88px*5)]";
      break;
  }
  switch (col) {
    case 0:
      xPosition = "left-[calc(9px+46.6px*0)] sm:left-[calc(17px+88px*0)]";
      break;
    case 1:
      xPosition = "left-[calc(9px+46.6px*1)] sm:left-[calc(17px+88px*1)]";
      break;
    case 2:
      xPosition = "left-[calc(9px+46.6px*2)] sm:left-[calc(17px+88px*2)]";
      break;
    case 3:
      xPosition = "left-[calc(9px+46.6px*3)] sm:left-[calc(17px+88px*3)]";
      break;
    case 4:
      xPosition = "left-[calc(9px+46.6px*4)] sm:left-[calc(17px+88px*4)]";
      break;
    case 5:
      xPosition = "left-[calc(9px+46.6px*5)] sm:left-[calc(17px+88px*5)]";
      break;
    case 6:
      xPosition = "left-[calc(9px+46.6px*6)] sm:left-[calc(17px+88px*6)]";
      break;
  }

  return (
    <div
      className={`absolute ${xPosition} ${yPosition} z-20 h-[40px] w-[38px] sm:h-[75px] sm:w-[70px]`}
    >
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
