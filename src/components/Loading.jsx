import React from "react";

const Loading = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center home h-[100vh]">
        <h1 className="text-white">Loading...</h1>
        <p className="text-white">
          Built using ReactJs, GitHub REST Api and tailwindCSS
        </p>
        <h1 className=" text-white">
          Give it a ⭐{" "}
          <a
            target="_blank"
            className="underline text-blue-500"
            href="https://github.com/priyanshu-ch29/"
          >
            here
          </a>
        </h1>
      </div>
    </>
  );
};

export default Loading;
