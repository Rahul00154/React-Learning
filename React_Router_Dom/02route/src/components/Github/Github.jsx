import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Rahul00154")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className=" text-center m-4 bg-gray-700 text-white text-3xl ">
      Github Repository : {data.public_repos}
      <img src={data.avatar_url} alt="Git picture" width={250} />
    </div>
  );
}

export default Github;

export const githubInfo = async () => {
  const response = await fetch("https://api.github.com/users/Rahul00154");
  return response.json();
};
