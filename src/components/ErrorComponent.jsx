import errorImage from '../../src/assets/icons8-error-96.png'
import { Link } from 'react-router-dom'
import WebFont from 'webfontloader';
import { useEffect } from 'react';

const ErrorComponent = () => {


    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Bebas Neue', 'Chilanka','Lobster']
          }
        });
       }, []);
  return (
    <div className='w-[90%] mx-auto'>
        <h1 className="font-extrabold text-center border-b border-black text-4xl py-[2.5vh] font-mono" style={{fontFamily:'Lobster'}}>
            <Link to={'/'}>
            Loctect News
            </Link>
        </h1>
        <div className=" h-[90vh] flex flex-col gap-3 justify-center items-center bg-[#efe9dc]">
        {/* <a target="_blank" href="https://icons8.com/icon/DXTORnlJu69P/error">Error</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
        <div className="h-32 w-32">
            <img src={errorImage} alt="Error Message Image" className='h-full w-full object-cover' />
        </div>
        <p className='text-3xl font-bold text-black mb-4'>Oops</p>
        <p className='text-lg font font-medium text-[rgba(0,0,0,0.7)] mb-2'>Sorry, an unexpected error has occurred</p>
        <p className='text-base font-medium italic text-gray-800'>Not Found</p>
        <Link to={'/'}>
            <p className='text-base font-medium text-gray-800 '>Click <span className='font-bold text-lg text-black transition-all hover:underline'>Here</span> to go back to homepage</p>
        </Link>

        </div>

    </div>
  )
}

export default ErrorComponent