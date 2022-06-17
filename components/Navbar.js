import React from "react";
import request from "../utils/request";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  const handleClick = (key) => {
    router.push(`?genre=${key}`);
  };
  return (
    <div className="flex justify-center bg-gray-600 text-gray-200 select-none text-xl lg:text-2xl">
      {Object.entries(request).map(([key, { title, url }]) => {
        return (
          <h2
            className="m-6 cursor-pointer hover:text-white active:text-red-400"
            key={key}
            onClick={(e) => handleClick(key)}
          >
            {title}
          </h2>
        );
      })}
    </div>
  );
}

export default Navbar;
