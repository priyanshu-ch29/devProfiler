import React from "react";
import { FaRegStar } from "react-icons/fa6";

const RepoData = ({ data }) => {
  const { name, language, stargazers_count, html_url } = data;

  return (
    <>
      <div className=" flex p-5 flex-col border rounded-2xl w-[70%] h-[40vh] m-10 gap-12">
        <h1 className=" text-xl font-semibold">{name}</h1>
        <div className=" flex justify-center items-center gap-12">
          <div>
            <h1 className=" text-xl">Total Star</h1>
            <h1 className=" text-xl">{stargazers_count}</h1>
          </div>
          <FaRegStar className=" text-blue-500 text-2xl" />
        </div>

        <div className=" flex justify-between items-center">
          <h1 className=" bg-red-200 rounded-lg text-red-500">
            {language ? language : "other"}
          </h1>
          <a href={html_url} target="_blank">
            <button className=" bg-green-500 p-3 rounded-lg text-white">
              visit
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default RepoData;
