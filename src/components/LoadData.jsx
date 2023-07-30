/* eslint-disable react/prop-types */

export const LoadData = (props) => {

  return (
     <div className='fixed top-0 left-0 w-full h-[100vh] bg-[rgba(0,0,0,0.4)] flex justify-center items-center'>
        {props.children}
     </div>
  )
}
