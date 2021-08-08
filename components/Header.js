import Image from "next/image";
import Logo from "../images/logo.png";
import { useRouter } from "next/router";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [nbrGuests, setNbrGuest] = useState(1);
  const router = useRouter();
  const Search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        nbrGuests,
      },
    });
    setSearchInput("");
  };
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  return (
    <header className=" sticky  top-0 z-50 bg-white grid grid-cols-3 shadow-md p-2 items-center">
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-8 cursor-pointer "
      >
        <Image
          src={Logo}
          objectFit="contain"
          layout="fill"
          objectPosition="left"
        />
      </div>
      <div className="flex border rounded-full py-1.5 px-3 items-center">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          className="bg-transparent flex-grow outline-none text-gray-700 placeholder-gray-300 "
          placeholder="search"
        />
        <SearchIcon className="hidden h-7 ml-2 bg-red-700 rounded-full text-white p-1.5 md:inline-flex" />
      </div>
      <div className="flex space-x-2 items-center justify-end text-gray-500">
        <p className="text-xs hidden md:inline-block">Become a host</p>
        <GlobeAltIcon className="h-5 cursor-pointer" />
        <div className="flex items-center border-2 rounded-full p-1.5 space-x-2">
          <MenuIcon className="h-5" />
          <UserCircleIcon className="h-5" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="flex-grow font-semibold text-xl pl-2">
              Number of Guests
            </h2>
            <UserIcon className="h-5" />
            <input
              value={nbrGuests}
              onChange={(e) => setNbrGuest(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 outline-none text-red-400"
            />
          </div>
          <div className="flex items-center">
            <button
              onClick={() => {
                setSearchInput("");
              }}
              className="flex-grow text-gray-500"
            >
              Cancel
            </button>
            <button onClick={Search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
