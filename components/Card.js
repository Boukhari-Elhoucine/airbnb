import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
function Card({ img, location, description, title, star, price, total }) {
  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-in-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex  justify-between">
          <p className="text-xs sm:text-sm text-gray-500">{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-sm md:text-base">{title}</h4>
        <div className="border-b w-10 pt-2"></div>
        <p className="pt-1 text-xs text-gray-400 flex-grow sm:text-sm">
          {description}
        </p>
        <div className="flex justify-between pt-5 items-end">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text-lg font-semibold pb-1">{price}</p>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
