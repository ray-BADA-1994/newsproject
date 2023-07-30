// import React from 'react'

import TitleAuthorCard from "./TitleAuthorCard"
import TopHeadingSection from "./TopHeadingSection"

const Card = () => {
  return (
    <div className="pr-2 pb-2 border-r border-b border-black
    ">
        <TopHeadingSection/>
        <TitleAuthorCard index={true}/>
        <TitleAuthorCard index={true}/>
        <TitleAuthorCard index={false}/>
    </div>
  )
}

export default Card