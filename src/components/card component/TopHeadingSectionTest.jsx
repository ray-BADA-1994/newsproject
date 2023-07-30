/* eslint-disable react/prop-types */
// import React from 'react'
import {GrFormNextLink} from 'react-icons/gr'
import { useNavigate  } from 'react-router-dom';
import {dataContext} from '../DataFetching'
import { useContext } from "react";

const TopHeadingSectionTest = () => {
  const {section, url} = useContext(dataContext)

   const navigate = useNavigate()

   const handleNavigationToNewsList = () => {
     navigate(`/section/${section}/${url}`, {state : [section, url]})
   }

  return (
    <div className="h-14 md:h-20 border-b border-black">
        <div className="h-full flex justify-between items-center">
           <h1 className="font-extrabold text-lg md:text-2xl font-mono text-black">{section}</h1>
           <div className="w-fit flex justify-center items-center gap-x-1 see-more-container cursor-pointer" onClick={()=> handleNavigationToNewsList()}>
                <p className='text-sm md:text-base'>See All</p>
                <span>
                  <GrFormNextLink/>   
                </span>
           </div>
        </div>
    </div>
  )
}

export default TopHeadingSectionTest