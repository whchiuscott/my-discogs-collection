"use client";

import React, { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import { Fugaz_One } from "next/font/google";
import Record from "@/components/Record";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Music() {
  const [records, setRecords] = useState(null);
  const [error, setError] = useState(null);
  const [buttonText, setButtonText] = useState("↑");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Artist");
  const [searchQuery, setSearchQuery] = useState("");
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    //fetching data from discogs
    const fetchRecords = async () => {
      try {
        const response = await fetch(
          `https://api.discogs.com/users/nextlevelscottie/collection/folders/1/releases?token=${process.env.NEXT_PUBLIC_DISCOG_TOKEN}&per_page=100&sort=artist`
        );

        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        setRecords(data.releases);
      } catch (error) {
        console.error("Failed to fetch records:", error.message);
        setError(error);
      }
    };

    fetchRecords();
  }, []);

  const handleClick = () => {
    setButtonText((prevText) => (prevText === "↑" ? "↓" : "↑"));
    setIsAscending((prevState) => !prevState);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  //click outside to close dropdown effect
  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".dropdown-container")) {
        setIsDropdownOpen(false);
      }
    }

    //listen to the whole doc for event
    document.addEventListener("mousedown", handleClickOutside);

    //clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (error) {
    return <div>Failed to load records: {error.message}</div>;
  }

  //if records is still null, display loading
  if (!records) {
    return <Loading />;
  }

  //only when records exist, proceed to filer records
  const filteredRecords = records.filter((record) => {
    const artistName = record.basic_information.artists[0].name.toLowerCase();
    const albumTitle = record.basic_information.title.toLowerCase();
    const releasedYear = record.basic_information.year.toString();
    const transformedSearchQuery = searchQuery.toLocaleLowerCase();
    return (
      artistName.includes(transformedSearchQuery) ||
      albumTitle.includes(transformedSearchQuery) ||
      releasedYear.includes(transformedSearchQuery)
    );
  });

  //sort the filtered records
  const sortedRecords = filteredRecords.sort((a, b) => {
    let comparison = 0; //initialize a comparison value set to 0
    if (selectedOption === "Album") {
      comparison =
        a.basic_information.title > b.basic_information.title ? 1 : -1; // -1 is ascending, 1 is descending
    } else if (selectedOption === "Year Released") {
      comparison = a.basic_information.year - b.basic_information.year; //ascending
    } else {
      comparison =
        a.basic_information.artists[0].name >
        b.basic_information.artists[0].name
          ? 1
          : -1; // -1 is ascending, 1 is descending
    }
    return isAscending ? comparison : -comparison;
  });

  return (
    <main className="flex flex-col justify-start items-center flex-1 mx-2 gap-1 sm:gap-2 md:gap-4">
      {/* Title & Subtitle */}
      <div className="flex flex-col justify-center items-center my-1 xxs:my-2 md:my-3 lg:my-5 gap-[6px] xxs:gap-2 xs:gap-3 md:gap-5 lg:gap-8">
        <h1
          className={
            "text-[20px] xxs:text-[23px] xs:text-[27px] sm:text-[39px] md:text-[49px] lg:text-[66px] text-sky-800 " +
            fugaz.className
          }
        >
          Scott&apos;s Record Collection 💽
        </h1>
        <h2 className="text-[10px] xs:text-[13px] sm:text-sm md:text-base lg:text-xl text-sky-900 sm:mt-1">
          All data fetched from my collection on{" "}
          <a
            href="https://www.discogs.com/"
            target="_blank"
            className="text-indigo-500 hover:text-indigo-800"
          >
            Discogs ⚙️
          </a>
        </h2>
      </div>

      {/* buttn & dropdown menu & search */}
      <div className="flex flex-row justify-center flex-wrap gap-1 xxs:gap-2 xs:gap-2 sm:gap-3">
        {/* button */}
        <button
          className={
            "text-xs sm:text-base md:text-lg min-w-10 xxxs:min-w-14 xxs:min-w-20 sm:min-w-20 min-h-4 sm:min-h-12 md:min-h-14 rounded-full overflow-hidden duration-200 hover:bg-[#1e5e86] hover:border-[#1e5e86] border-2 border-solid border-[#0171b1] text-white bg-[#0171b1]  " +
            fugaz.className
          }
          onClick={handleClick}
        >
          {buttonText}
        </button>
        {/* dropdown menu */}
        <div className="relative dropdown-container">
          <div className="relative">
            <button
              className={
                "relative flex flex-row justify-center items-center p-2 text-xs sm:text-base md:text-lg min-w-40 xxxs:min-w-44 xxs:min-w-48 sm:min-w-52 md:min-w-56 min-h-4 sm:min-h-12 md:min-h-14 text-center rounded-full overflow-hidden duration-200 border-2 border-solid border-[#0171b1] focus:outline-none hover:border-[#1e5e86] text-sky-800 " +
                fugaz.className
              }
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              {selectedOption}
              <p className="absolute right-2.5 md:right-3">▼</p>
            </button>
            {/* conditional rendering */}
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <li
                  className="cursor-pointer hover:bg-gray-200 px-4 py-2"
                  onClick={() => handleOptionClick("Artist")}
                >
                  Artist
                </li>
                <li
                  className="cursor-pointer hover:bg-gray-200 px-4 py-2"
                  onClick={() => handleOptionClick("Album")}
                >
                  Album
                </li>
                <li
                  className="cursor-pointer hover:bg-gray-200 px-4 py-2"
                  onClick={() => handleOptionClick("Year Released")}
                >
                  Year Released
                </li>
              </ul>
            )}
          </div>
        </div>
        {/* search */}
        <input
          name="type"
          className={
            "text-xs sm:text-sm md:text-base min-w-52 xxxs:min-w-60 xxs:min-w-[280px] xs:min-w-[285px] sm:min-w-[304px] md:min-w-80 lg:min-w-[500px] min-h-10 xs:min-h-[36px] sm:min-h-12 md:min-h-14 text-center rounded-full overflow-hidden duration-200  border-2 border-solid border-[#0171b1] focus:outline-none hover:border-[#1e5e86] " +
            fugaz.className
          }
          placeholder="Search by artist, album, year released..."
          value={searchQuery}
          onChange={handleSearchChange}
        ></input>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 my-2 xs:my-3 sm:my-4 md:my-5 max-w-full sm:gap-1 md:gap-2 lg:gap-[10px]">
        {sortedRecords.map((record, index) => (
          <Record key={index} record={record} />
        ))}
      </div>
    </main>
  );
}
