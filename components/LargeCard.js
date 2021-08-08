import Image from "next/image";
function LargeCard({ img, title, description, buttontext }) {
  return (
    <div className="relative">
      <div className="relative h-56 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="absolute top-10 left-6">
        <h3 className="text-2xl font-medium mb-2 w-52">{title}</h3>
        <p className="text-xs">{description}</p>
        <button className="text-sm text-white bg-gray-900 rounded-md px-2 py-1 mt-4">
          {buttontext}
        </button>
      </div>
    </div>
  );
}

export default LargeCard;
