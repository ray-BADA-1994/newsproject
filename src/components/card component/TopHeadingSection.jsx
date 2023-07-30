// import React from 'react'
import {GrFormNextLink} from 'react-icons/gr'

const TopHeadingSection = () => {
  return (
    <div className="h-20 border-b border-black">
        <div className="h-full flex justify-between items-center">
           <h1 className="font-extrabold text-3xl font-mono text-black">News</h1>
           <div className="w-fit flex justify-center items-center gap-x-2">
                <p className='text-xl'>See All</p>
                <span>
                  <GrFormNextLink/>   
                </span>
           </div>
        </div>
    </div>
  )
}

export default TopHeadingSection