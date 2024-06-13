import React, { useState } from "react";
import github from "../assets/github.svg";
import { useNavigate } from "react-router";

const Home = () => {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const onFinish = async (e) => {
    e.preventDefault();
    navigate(`/user/${username}`);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-7 h-[100vh] home">
        <img src={github} className=" w-[50%] h-[30vh]" />
        <div>
          <h1 className="text-white font-semibold text-2xl">
            Find your DEV Profile
          </h1>
        </div>
        <form onSubmit={onFinish}>
          <input
            className=" p-4 w-[380px] rounded-lg home text-white border border-lime-500  focus:border-lime-500 focus:outline-none"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            name="user"
            placeholder="github username"
            autoComplete="off"
          />
        </form>
        <div className="flex flex-col justify-center items-center bottom-0 absolute">
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
      </div>
    </>
  );
};

export default Home;
