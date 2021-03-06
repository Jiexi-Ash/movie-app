import React from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

const BASE_URL = "https://image.tmdb.org/t/p/original";

function Card({ result }) {
  return (
    <div className="p-3 cursor-pointer hover:text-white active:text-red-400 xl:hover:scale-105 transition-transform duration-200">
      <Image
        src={`${BASE_URL}${result.poster_path}`}
        width={200}
        height={100}
        alt="logo-image"
        layout="responsive"
      />
      <div className="p-2">
        <p className="truncate text-lg">{result.overview}</p>
        <h2 className="text-lg font-bold">{result.title || result.name}</h2>
        <p className="flex items-center">
          {result.release_date || result.first_air_date}{" "}
          <ThumbUpIcon className="h-5 ml-3 mr-1" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
}

export default Card;
