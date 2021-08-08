import Image from "next/image";
function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 text-center w-full text-sm sm:text-lg font-medium">
        <p>not sure where to go? Perfect</p>
        <button className=" mt-1 text-purple-500 bg-white px-10 py-4 shadow-md rounded-lg hover:shadow-lg active:scale-90 transition duration-150 ease-linear">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
