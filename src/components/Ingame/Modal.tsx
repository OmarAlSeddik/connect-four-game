import Link from "next/link";
import { useAppContext } from "~/context/AppContext";

const Modal = () => {
  const { isPaused, togglePause, restart } = useAppContext();
  if (!isPaused) return <></>;

  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 top-0 z-50 bg-[rgba(0,0,0,0.5)]"
        onClick={togglePause}
      />
      <div
        className="absolute left-1/2 top-1/2 z-50 flex h-[30.6875rem] w-[30rem]
      max-w-[90%] translate-x-[-50%] translate-y-[-50%] flex-col items-center gap-[2rem]
      rounded-[2.5rem] border-[3px] border-black bg-cLight
      px-[1.25rem] py-[1.875rem] shadow-custom sm:px-[2.5rem] sm:py-[3.125rem]"
      >
        <h1 className="text-lg font-bold text-white">PAUSE</h1>
        <div className="relative flex h-full w-full flex-col items-center gap-[1.5rem]">
          <button
            onClick={togglePause}
            className="w-full max-w-[25rem] items-center justify-between rounded-[1.25rem]
            border-[3px] border-black bg-white p-[1.25rem] text-center text-md font-bold shadow-custom
            transition-all active:shadow-customActive"
          >
            CONTINUE GAME
          </button>
          <button
            className="w-full max-w-[25rem] rounded-[1.25rem] border-[3px] border-black
            bg-white p-[1.25rem] text-center text-md font-bold
            shadow-custom transition-all active:shadow-customActive"
            onClick={() => {
              restart();
              togglePause();
            }}
          >
            RESTART
          </button>
          <Link
            className="w-full max-w-[25rem] rounded-[1.25rem] border-[3px]
           border-black bg-cRed p-[1.25rem] text-center text-md font-bold text-white shadow-custom
           transition-all active:shadow-customActive"
            href="/"
          >
            QUIT GAME
          </Link>
        </div>
      </div>
    </>
  );
};

export default Modal;
