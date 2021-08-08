import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Main from "../components/Main";
import Footer from "../components/Footer";
export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <Main data={exploreData} cardsData={cardsData} />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch(
    "https://jsonkeeper.com/b/4G1G"
  ).then((response) => response.json());
  const cardsData = await fetch(
    "https://jsonkeeper.com/b/VHHT"
  ).then((response) => response.json());
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
