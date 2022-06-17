import React from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

const BASE_URL = "https://image.tmdb.org/t/p/original";

function Card({ result }) {
  return (
    <div className="">
      <Image
        src={`${BASE_URL}${result.poster_path}`}
        width={200}
        height={100}
        alt="logo-image"
        layout="responsive"
      />
      <div className="">
        <p className="truncate">{result.overview}</p>
        <h2>{result.title || result.name}</h2>
        <p>
          {result.release_date || result.first_air_date}{" "}
          <ThumbUpIcon className="h-5" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
}

export default Card;
