import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
function Main({ data, cardsData }) {
  return (
    <main className="max-w-4xl mx-auto px-8 md:px-10">
      <section className="pt-4 ">
        <h2 className="text-2xl font-semibold pb-5">Explore Nearby</h2>
        <div className="grid grid-clos-1 sm:grid-cols-2 lg:grid-cols-3">
          {data?.map((item, index) => (
            <SmallCard
              key={index}
              img={item.img}
              location={item.location}
              distance={item.distance}
            />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold py-8">Live Anywhere</h2>
        <div className="flex overflow-scroll space-x-3 scrollbar-hide p-3 -ml-3 ">
          {cardsData?.map((item) => (
            <MediumCard key={item.img} img={item.img} title={item.title} />
          ))}
        </div>
      </section>
      <section className="py-10 cursor-pointer">
        <LargeCard
          img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
          title="The Greatest Outdoors"
          description="Whishlist curated by Airbnb"
          buttontext="Get Inspired"
        />
      </section>
    </main>
  );
}

export default Main;
