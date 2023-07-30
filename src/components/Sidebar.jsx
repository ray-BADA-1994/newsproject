/* eslint-disable react/prop-types */
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useMenuContext} from '../context/MenuContext';



export const Sidebar = () => {

    const { handleShowSideBar,showSideBar } = useMenuContext();


    const sectionObj = [
      {
        name:'World News',
        url: 'mockGeneralNews'
      },
      {
        name:'Sports News',
        url: 'mockGeneralNews'
      },
      {
        name:'Business News',
        url: 'mockBusinessNews'
      },
      {
        name:'Science News',
        url: 'mockScienceNews'
      },
      {
        name:'Tech News',
        url: 'mockTechNews'
      },
      {
        name:'Health News',
        url: 'mockHealthNews'
      },
    ]

     
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Bebas Neue', 'Chilanka','Lobster']
          }
        });
       }, []);
  return (
    <div className={`bg-black  text-white  pt-5 md:sticky fixed top-0 left-0 h-[100vh] ${showSideBar ? 'block animate_sidebary  w-[150px] md:w-[250px] basis-1/2u' : 'hidden translate-x-[-20px]'}`}>
         <h1 className="font-extrabold text-lg lg:text-4xl font-mono pl-2 cursor-pointer" style={{fontFamily:'Lobster'}}>
            <Link to={'/'}>
            Loctect News
            </Link>
         </h1>

         <div className='border-t border-white flex-wrap flex gap-3 gap-y-5 mt-10 pt-5 px-2 cursor-pointer'>
           {
            sectionObj.map((section, index)=>{
                return (
                    <Link 
                    onClick={()=> handleShowSideBar()}
                    key={index+904532}  
                    className='py-2 px-4 border transition-all hover:text-[rgba(255,255,255,0.6)] border-white rounded-md lg:text-3xl text-smy uppercase' style={{fontFamily:'Bebas Neue'}}
                    to={`section/${section.name}/${section.url}`}
                    >
                       {section.name}
                    </Link>
                )
            })
           }
         </div>
    </div>
  )
}
