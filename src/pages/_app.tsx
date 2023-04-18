import { type AppType } from "next/dist/shared/lib/utils";
import { AppContextProvider } from "~/context/AppContext";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
};

export default MyApp;
