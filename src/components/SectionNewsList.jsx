import { useEffect } from 'react';
import { Blackbar } from './Blackbar';
import WebFont from 'webfontloader';
import { Home } from '../pages/Home';
import { useLocation, Link, useParams } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query"
import { Subscribe } from './Subscribe';





export const SectionNewsList = () => {

    const {section, urlpath} = useParams()

    // const location = useLocation()

    // const state = location.state

    const { data, isError, isLoading, error} = useQuery({queryKey: [`${section+123}`], queryFn: () => fetch(`https://mockjsonapi.onrender.com/${urlpath}`).then(res => res.json())})




    // const loadData = () => JSON.parse(JSON.stringify(jsonData));
    // const datum = loadData()
    // const result = datum.data
    // const selectOne = result[0]


 

    
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Lora', 'Slabo 27px','Poppins', 'Roboto', 'Open Sans','Proza Libre','Trirong','Lato']
          }
        });
       }, []);


    if (isLoading || data.length == 0) {
        return (
             <div className='fixed top-0 left-0 w-full h-[100vh] bg-[rgba(0,0,0,0.8)] flex justify-center items-center'>
                <div className="spinner"></div>
             </div>
        );
    }
   
    if (isError) {
        return <h1>{error.message}</h1>
    }



  return (

    
        <div className='min-h-[100vh] h-fit w-[100%]y  mt-10y'>

            <div className='py-5 md:h-[12vh] text-center font-extrabold text-2xl md:text-[4rem] uppercase mb-5 border-b flex justify-center items-center border-black'>
                <h1 style={{fontFamily:'Trirong'}}>{section}</h1>
            </div>


            <div className=' md:grid-cols-2 lg:grid-cols-4 gap-8 grid'>
            {  

              data[0].data.splice(0,4).map((article, index)=>{
                    let specificStyle = index == 0
                    return (
                        <div key={index + 1049850} className={`md:h-[500px] flex flex-col justify-start  gap-y-3 p-4 md:border-r md:border-b md:border-l-0 md:border-t-0 shadow-md md:shadow-none border border-[rgba(0,0,0,0.1)] md:border-black ${specificStyle ? 'bg-[#222222] items-center text-white pt-6' : 'bg-transparent items-start'}`}>
                            <div className='h-[200px]'>
                                <img src={article.image} alt={article.title} className={`  object-cover aspect-auto ${specificStyle ? 'rounded-[100%] h-[200px] w-[200px]' : 'w-full rounded-xl h-full'}`}/>
                            </div>
                            <Link to={`/${article.title.trim().replaceAll(" ","-").toLowerCase()}/${urlpath}`} state={article} className={`font-semibold linkAnchor text-xl blog_container cursor-pointer ${specificStyle && 'text-center text-white'}`} style={{fontFamily:'Proza Libre'}}>
                                <span className='underlineSpan'>
                                {article.title}

                                </span>
                            </Link>
                            {!specificStyle  && <p className='font-medium text-lg text-[rgba(0,0,0,0.8)] ' style={{fontFamily:'Roboto'}}>{article.description.slice(0,50)}</p>}  
                        </div>
                    )
                })
            }
            </div>

            <div className='my-5'>
                <Blackbar />
            </div>

            <div className='layout grid grid-cols-1y gap-y-5 '>
            {
                data[0].data.map((article, index)=>{
                    let specificStyle = index== 0 || index == 7 || index == 8
                    return (
                        <div key={index + 104050} className={`min-h-fit max-h-[800px] flex flex-col justify-start items-start gap-y-3 p-4 md:border-r border-b border-black ${specificStyle ? 'colSpan2 items-center bg-[#dad4c6]t' : 'items-start'}`}>
                            <div className={`${specificStyle ? 'h-[500px] w-full' : 'h-[200px] w-full'}`}>
                                <img 
                                // src={selectOne.image} 
                                // src='https://images.pexels.com/photos/2516442/pexels-photo-2516442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                src={article.image}
                                alt={article.title} 
                                className='w-[100%] h-full object-cover aspect-auto rounded-xl grayscale transition-all hover:grayscale-0'/>
                            </div>
                        
                            <Link to={`/${article.title.trim().replaceAll(" ","-").toLowerCase()}/${urlpath}`} state={article} className={`font-semibold linkAnchor ${specificStyle ? 'text-2xl md:text-4xl md:text-center leading-[1.5]' : 'text-xl'}`} style={{fontFamily:'Proza Libre'}}>
                                <span className='underlineSpan'>
                                {article.title}

                                </span>
                            </Link>

                            <p className='hidden font-medium text-lg text-[rgba(0,0,0,0.8)] ' style={{fontFamily:'Roboto'}}>{article.description.slice(0,70)}...</p>  

                        </div>
                    )
                })
            }
            </div>

            <div className='hiddeny'>
                
            <Subscribe />
            </div>


            <div className='mt-5'>
            <Home />
            </div>

        </div>
   

    
  )
}


