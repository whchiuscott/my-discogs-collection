import Image from "next/image";
import React from "react";

export default function Record({ record, i }) {
  return (
    <div
      key={i}
      className="flex flex-col justify-start items-center p-4 border border-transparent"
    >
      <div className="aspect-square">
        <Image
          src={record.basic_information.cover_image}
          alt={record.basic_information.title}
          width={200}
          height={200}
          className="w-32 xxxs:w-[136px] xxs:w-[154px] xs:w-[178px] sm:w-44 md:w-52 lg:w-56 h-32 xxxs:h-[136px] xxs:h-[154px] xs:h-[178px] sm:h-44 md:h-52 lg:h-56"
          priority
        />
      </div>
      <h2 className="text-center py-1 text-xs xs:text-sm md:text-base">
        {record.basic_information.artists[0].name} -{" "}
        {record.basic_information.title} ({record.basic_information.year})
      </h2>
    </div>
  );
}
