import Image from "next/image";
import { useAppContext } from "~/context/AppContext";

const Marker = ({ markerPosition }: { markerPosition: string }) => {
  const { isPlayer1Turn, gameOver } = useAppContext();
  let markerSrc = "";
  if (isPlayer1Turn) {
    markerSrc = "images/marker-red.svg";
  } else {
    markerSrc = "images/marker-yellow.svg";
  }

  if (gameOver.winner) return <></>;

  return (
    <Image
      src={markerSrc}
      alt="Active Column Marker"
      height={26}
      width={32}
      className={`absolute ${markerPosition} top-0 hidden translate-x-[60%] translate-y-[-100%] lg:block`}
    />
  );
};

export default Marker;
