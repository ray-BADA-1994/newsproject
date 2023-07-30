/* eslint-disable react/prop-types */
// import React from 'react'

import TitleAuthorCardTestLoader from "./TitleAuthorCardTestLoader";
import TopHeadingSectionTest from "./TopHeadingSectionTest"

const CardTestingLoader = () => {
  // eslint-disable-next-line react/prop-types
  // const {data, section} = props

  // console.log(data);

  

  // let displayedPost = data.articles.splice(0,3)
  // let displayedPost = data.data

  // console.log(displayedPost);

  return (
    <div className="pr-2 pb-2
     lg:h-[500px]">
        {/* <TopHeadingSectionTest/> */}
        {
          [2,3].map((blog, index)=> {
            return <TitleAuthorCardTestLoader key={index + 1234567}/>
          })
        }
    </div>
  )
}

export default CardTestingLoader