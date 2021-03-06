import Image from "next/image";
function SmallCard({ img, location, distance }) {
  return (
    <div className="flex items-center m-2 rounded-lg hover:bg-gray-100 hover:scale-105 transition-transform duration-150 ease-out">
      <div className="relative h-16 w-16">
        <Image layout="fill" src={img} className="rounded-lg" />
      </div>
      <div className="ml-2">
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
