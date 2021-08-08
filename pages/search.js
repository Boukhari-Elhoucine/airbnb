import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import Card from "../components/Card";
import { format } from "date-fns";
function Search({ result }) {
  const router = useRouter();
  const { location, startDate, endDate, nbrGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Head>
        <title>Airbnb-search</title>
      </Head>
      <Header />
      <main className="flex">
        <section className="flex-grow pt-10 px-6">
          <p className="text-xs sm:text-sm">
            300+ - {range}- stays for {nbrGuests} guests
          </p>
          <h1 className="font-semibold text-lg mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden md:inline-flex space-x-3 mb-4 text-gray-700 whitespace-nowrap">
            <p className="button">Cancelation</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
          </div>
          <div className="flex flex-col">
            {result?.map((item) => (
              <Card
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                price={item.price}
                star={item.star}
                description={item.description}
                total={item.total}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const searchResult = await fetch(
    "https://jsonkeeper.com/b/5NPS"
  ).then((response) => response.json());
  return {
    props: {
      result: searchResult,
    },
  };
}
