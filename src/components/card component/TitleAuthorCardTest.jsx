/* eslint-disable react/prop-types */
// import React from 'react'
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import WebFont from "webfontloader";
import { dataContext } from "../DataFetching";

const TitleAuthorCardTest = (props) => {
  // eslint-disable-next-line react/prop-types
  const { index, blog } = props;

  const { url } = useContext(dataContext);

  let showBorder = index !== 2;

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Lora", "Slabo 27px"],
      },
    });
  }, []);

  return (
    <div
      className={`pt-2 pb-3 text-[#222222] ${
        showBorder && "border-b border-dashed border-black"
      }`}
    >
      <Link
        to={`/${blog.title.trim().replaceAll(" ", "-").toLowerCase()}/${url}`} // turns the title into a slug.
        state={blog}
        className="text-lg font-semibold capitalize mb-3 cursor-pointer linkAnchor"
      >
        <span className="underlineSpan">
          {`${blog.title.split(" ").slice(0, 12).join(" ")}....`}
        </span>
        <span className="text-xs text-gray-500 font-medium transition-all hover:text-black">
          continue reading
        </span>

        <p
          className="uppercase font-medium tracking-wide font-serif text-[12px]"
          style={{ fontFamily: "Lora" }}
        >
          {blog.author}
          {/* Lorem, ipsum dolor. */}
        </p>
      </Link>
    </div>
  );
};

export default TitleAuthorCardTest;
