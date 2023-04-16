import { type NextPage } from "next";
import Head from "next/head";
import Rules from "~/components/Rules";

const RulesPage: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Rules" />
      </Head>
      <Rules />
    </>
  );
};

export default RulesPage;
