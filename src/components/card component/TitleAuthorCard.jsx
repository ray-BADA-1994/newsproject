// import React from 'react'

const TitleAuthorCard = (props) => {
  
    // eslint-disable-next-line react/prop-types
    const {index} = props


  return (
    <div className={`pt-3 pb-7 text-[#222222] ${index && "border-b border-dashed border-black"}`}>
        <h1 className="text-lg font-semibold capitalize mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elitin explicabouiop optio sit doloribus</h1>
        <p className="uppercase font-medium tracking-wide font-serif text-[12px]">Lorem, ipsum dolor.</p>
    </div>
  )
}

export default TitleAuthorCard