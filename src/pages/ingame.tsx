import { type NextPage } from "next";
import Head from "next/head";
import Ingame from "~/components/Ingame";

const IngamePage: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Ingame" />
      </Head>
      <Ingame />
    </>
  );
};

export default IngamePage;
