/* eslint-disable react/prop-types */
// import React from 'react'

import TitleAuthorCardTest from "./TitleAuthorCardTest";
import TopHeadingSectionTest from "./TopHeadingSectionTest";
import { dataContext } from "../DataFetching";
import { useContext } from "react";

const CardTesting = () => {
  const { data } = useContext(dataContext);
  // eslint-disable-next-line react/prop-types

  let displayedPost = data[0].data.splice(0, 3);

  return (
    <div
      className="md:pr-2 md:pb-2 p-3 border md:border-l-transparent md:border-t-transparent border-[rgba(0,0,0,0.1)] shadow-md md:shadow-none md:border-r md:border-b md:border-black
     lg:h-[500px]"
    >
      <TopHeadingSectionTest />
      {displayedPost.map((blog, index) => {
        return <TitleAuthorCardTest blog={blog} index={index} key={index} />;
      })}
    </div>
  );
};

export default CardTesting;
