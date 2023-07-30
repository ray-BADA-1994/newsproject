/* eslint-disable react/prop-types */
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMenuContext} from '../context/MenuContext';




export default function Navbar() {
  
  const {showSideBar,  handleShowSideBar} = useMenuContext()
  

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Bebas Neue', 'Chilanka','Lobster']
      }
    });
   }, []);
  return (
    <div className="h-[10vh] flex justify-between items-center border-b border-black">
    {/* <!-- Hamburger menu --> */}
   <div 
  //  onClick={()=> props.handleShowSideBar()}
   >
    <input 
    type="checkbox" 
    id="checkbox" 
    checked={showSideBar}
    onChange={()=> handleShowSideBar()}
    ></input>
    <label htmlFor='checkbox' className="toggle">
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
    </label>
    {/* <div className='h-5 w-5 bg-black'></div> */}
   </div>

   {/* <!-- Logo Text --> */}
   <h1 className="font-extrabold text-4xl font-mono" style={{fontFamily:'Lobster'}}>
    <Link to={'/'} className={`${showSideBar && 'pointer-events-none'}`}>
       Loctect News
    </Link>
    </h1>

   {/* <!-- spacer --> */}
   <div></div>
   </div>
  )
}
