"use client";

import React, { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import { Fugaz_One } from "next/font/google";
import Record from "@/components/Record";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Music() {
  // 新增 useState 來保存抓取到的資料
  const [records, setRecords] = useState(null);
  const [error, setError] = useState(null);
  const [buttonText, setButtonText] = useState("↑"); // 使用 useState 控制按鈕文本
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 新增狀態來控制 dropdown 是否顯示
  const [selectedOption, setSelectedOption] = useState("Artist"); // 新增狀態來保存選擇的選項
  const [searchQuery, setSearchQuery] = useState("");
  const [isAscending, setIsAscending] = useState(true); // 用來保存排序順序的 state，預設為升序

  useEffect(() => {
    // 新增 useEffect 來抓取 Discogs API 的資料
    const fetchRecords = async () => {
      try {
        const response = await fetch(
          `https://api.discogs.com/users/nextlevelscottie/collection/folders/1/releases?token=${process.env.NEXT_PUBLIC_DISCOG_TOKEN}&per_page=100&sort=artist`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setRecords(data.releases); // 設定資料到 state
      } catch (error) {
        console.error("Failed to fetch records:", error.message);
        setError(error); // 如果抓取資料有錯誤，設定錯誤狀態
      }
    };

    fetchRecords(); // 執行抓取資料的函數
  }, []); // 空陣列確保只在初次渲染時執行

  const handleClick = () => {
    setButtonText((prevText) => (prevText === "↑" ? "↓" : "↑")); // 更新按鈕文本
    setIsAscending((prevState) => !prevState); // 反轉排序方向
  };

  // 新增處理選擇選項的函數
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // 點擊外部區域時關閉 Dropdown 的效果
  useEffect(() => {
    function handleClickOutside(event) {
      // 檢查點擊的元素是否在 dropdown 範圍內，如果不在則關閉 dropdown
      if (!event.target.closest(".dropdown-container")) {
        setIsDropdownOpen(false);
      }
    }

    // 監聽全域的點擊事件
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // 清理事件監聽器
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (error) {
    return <div>Failed to load records: {error.message}</div>;
  }
  // 在 records 為 null 時顯示 loading 狀態
  if (!records) {
    return <Loading />;
  }

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

  const sortedRecords = filteredRecords.sort((a, b) => {
    let comparison = 0;
    if (selectedOption === "Album") {
      comparison =
        a.basic_information.title > b.basic_information.title ? 1 : -1; // 根據 Album 排序
    } else if (selectedOption === "Year Released") {
      comparison = a.basic_information.year - b.basic_information.year; // 根據 Year Released 排序
    } else {
      comparison =
        a.basic_information.artists[0].name >
        b.basic_information.artists[0].name
          ? 1
          : -1; // 根據 Artist 排序（預設）
    }
    return isAscending ? comparison : -comparison; // 根據排序方向返回比較結果
  });

  return (
    <main className="flex flex-col justify-start items-center flex-1 mx-2 gap-1 sm:gap-2 md:gap-4">
      <div className="flex flex-col justify-center items-center my-1 xxs:my-2 md:my-3 lg:my-5 gap-[6px] xxs:gap-2 xs:gap-3 md:gap-5 lg:gap-8">
        <p
          className={
            "text-[20px] xxs:text-[23px] xs:text-[27px] sm:text-[39px] md:text-[49px] lg:text-[66px] text-sky-800 " +
            fugaz.className
          }
        >
          Scott&apos;s Record Collection 💽
        </p>
        <p className="text-[10px] xs:text-[13px] sm:text-sm md:text-base lg:text-xl text-sky-900 sm:mt-1">
          All data fetched from my collection at{" "}
          <a
            href="https://www.discogs.com/"
            target="_blank"
            className="text-indigo-500 hover:text-indigo-800"
          >
            Discogs ⚙️
          </a>
        </p>
      </div>

      <div className="flex flex-row justify-center flex-wrap gap-1 xxs:gap-2 xs:gap-2 sm:gap-3">
        {/* 升冪降冪按鈕 */}
        <button
          className={
            "text-xs sm:text-base md:text-lg min-w-10 xxxs:min-w-14 xxs:min-w-20 sm:min-w-20 min-h-4 sm:min-h-12 md:min-h-14 rounded-full overflow-hidden duration-200 hover:bg-[#1e5e86] hover:border-[#1e5e86] border-2 border-solid border-[#0171b1] text-white bg-[#0171b1]  " +
            fugaz.className
          }
          onClick={handleClick}
        >
          {buttonText}
        </button>
        {/* 結束升冪降冪按鈕 */}

        {/* Dropdown Menu */}
        <div className="relative dropdown-container">
          <div className="relative">
            <button
              className={
                "relative flex flex-row justify-center items-center p-2 text-xs sm:text-base md:text-lg min-w-40 xxxs:min-w-44 xxs:min-w-48 sm:min-w-52 md:min-w-56 min-h-4 sm:min-h-12 md:min-h-14 text-center rounded-full overflow-hidden duration-200 border-2 border-solid border-[#0171b1] focus:outline-none hover:border-[#1e5e86] text-sky-800 " +
                fugaz.className
              }
              onClick={() => setIsDropdownOpen((prev) => !prev)} // 點擊時切換 dropdown 顯示狀態
            >
              <p>{selectedOption}</p>{" "}
              <p className="absolute right-2.5 md:right-3">▼</p>
            </button>

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
        {/* 結束 Dropdown Menu */}

        {/* 輸入欄位 */}
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
        {/* 結束輸入欄位 */}
      </div>

      {/* 專輯呈現區塊 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 max-w-full sm:gap-3 lg:gap-[10px]">
        {sortedRecords.map((record, i) => (
          <Record key={i} record={record} />
        ))}
      </div>
      {/* 專輯呈現區塊 */}
    </main>
  );
}
