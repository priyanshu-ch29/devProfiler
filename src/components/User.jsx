import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "./Loading";
import { FaLocationDot } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { PiUserCheckFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import RepoData from "./RepoData";
import { Link } from "react-router-dom";

const User = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState([]);
  const [repoData, setRepoData] = useState([]);
  const [request, setRequest] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://api.github.com/users/${username}`);
      const json = await data.json();
      setUserData(json);
    };

    fetchData();
  }, [username]);

  useEffect(() => {
    const fetchRepo = async () => {
      const data = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const json = await data.json();
      console.log(json);
      setRepoData(json);
    };

    fetchRepo();
  }, [username]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://api.github.com/rate_limit`);

      const data = await res.json();

      setRequest(data.rate);
    };

    fetchData();
  }, [username]);

  const {
    login,
    name,
    avatar_url,
    twitter_username,
    location,
    public_repos,
    followers,
    following,
    html_url,
  } = userData;

  if (repoData.length === 0) return <Loading />;

  return userData.length === 0 ? (
    <Loading />
  ) : (
    <>
      <div className=" user">
        <div className="absolute top-0 left-0 p-4 text-white">
          <h1 className="text-2xl">
            {request?.limit}/{request?.remaining}
          </h1>
          <h1 className="uppercase">Request Left</h1>
        </div>
        <div className=" flex justify-end pt-5 pr-[5rem]">
          <Link to="/">
            <button className="fixed bg-lime-600 text-white p-2 w-[4%] rounded-lg max-lg:w-[50px] max-md:w-[50px]">
              Home
            </button>
          </Link>
        </div>

        <div className=" text-white flex flex-col items-center justify-center text-center gap-6">
          <img
            src={avatar_url}
            alt=""
            className="rounded-full bg-lime-500 p-2 mt-12 h-[34vh]"
          />
          <div>
            <h1 className=" text-5xl font-semibold">{name}</h1>
            <h1 className=" text-2xl font-medium mt-4 text-lime-3 00">
              @{login}
            </h1>
            <div className=" flex justify-center items-center mt-2">
              <FaLocationDot className="" />
              <h1 className=" text-xl">{location}</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-10 mt-10 text-xl text-white w-[40%] mx-auto shadow-xl max-md:flex-col max-md:w-[70%] max-md:justify-between">
          <div className=" flex justify-center items-center gap-10">
            <div>
              <h1>Total Repo</h1>
              <h1 className=" text-blue-500">{public_repos}</h1>
            </div>
            <FaBook className=" text-blue-500" />
          </div>
          <div className=" flex justify-center items-center gap-10">
            <div>
              <h1>Followers</h1>
              <h1 className=" text-blue-300">{followers}</h1>
            </div>
            <PiUserCheckFill className=" text-blue-300" />
          </div>
          <div className=" flex justify-center items-center gap-10">
            <div>
              <h1>Following</h1>
              <h1>{following}</h1>
            </div>
            <FaUsers />
          </div>
        </div>
        <div className=" text-white flex justify-center items-center mt-5 gap-5 cursor-pointer pb-5">
          <FaXTwitter />{" "}
          <a href={`https://twitter.com/${twitter_username}`} target="_blank">
            Twitter
          </a>
          <FaGithub />{" "}
          <a href={html_url} target="_blank">
            Github
          </a>
          <FaLink />{" "}
          <a href={userData.blog} target="_blank">
            Website
          </a>
        </div>
      </div>
      <div>
        <h1 className=" text-xl font-semibold m-4">Showing: Top Repos</h1>
        <div className="grid grid-cols-3 place-items-center w-[90%] mx-auto max-lg:grid-cols-2 max-md:grid-cols-1">
          {repoData
            ? repoData
                ?.sort((a, b) => b.stargazers_count - a.stargazers_count)
                .filter((e, index) => index < 6)
                .map((e, index) => <RepoData key={index} data={e} />)
            : "Loading..."}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bottom-0 user w-full p-5">
        <p className="text-white">
          Built using ReactJs, GitHub REST Api and tailwindCSS
        </p>
        <h1 className=" text-white">
          Give it a ⭐{" "}
          <a
            target="_blank"
            className="underline text-blue-500"
            href="https://github.com/priyanshu-ch29/devProfiler"
          >
            here
          </a>
        </h1>
      </div>
    </>
  );
};

export default User;
