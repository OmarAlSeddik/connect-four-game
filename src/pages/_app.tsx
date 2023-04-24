import { AnimatePresence } from "framer-motion";
import { type AppType } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import { AppContextProvider } from "~/context/AppContext";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const route = useRouter().route;
  return (
    <AppContextProvider>
      <AnimatePresence initial={false}>
        <Component {...pageProps} key={route} />
      </AnimatePresence>
    </AppContextProvider>
  );
};

export default MyApp;
