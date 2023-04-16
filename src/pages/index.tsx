import { type NextPage } from "next";
import Head from "next/head";
import MainMenu from "~/components/MainMenu";

const MainMenuPage: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Main Menu" />
      </Head>
      <MainMenu />
    </>
  );
};

export default MainMenuPage;
