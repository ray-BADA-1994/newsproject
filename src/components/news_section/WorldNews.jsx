// import React from 'react'

// import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect } from "react"
// import axios from 'axios'
import usePosts from "../../hooks/useFetch"
import Card from "../card component/Card"
import CardTesting from "../card component/CardTesting"

const WorldNews = () => {

  'https://api.currentsapi.services/v1/latest-news?' +
    'language=us&' +
    'apiKey=Dc3bonBeeErLrPwn3cpbmILNpLe42dHEX0ISSCC3Vo3bqoTm'

    // https://gnews.io/api/v4/top-headlines?category=general&apikey=8086be62a73ad6a41c1b5474e46697bc
    // https://gnews.io/api/v4/top-headlines?max=3&apikey=8086be62a73ad6a41c1b5474e46697bc

//  const {data,isError, isLoading, error} = usePosts('https://newsapi.org/v2/everything?q=politics&apiKey=35f81e68fa854e4b8f36ed72f667f642')
// const {data,isError, isLoading, error} = usePosts('https://api.currentsapi.services/v1/latest-news?' +
// 'language=us&' +
// 'apiKey=Od5ksU0cgs7u5PP42FOEY0DLUKR6lJ9RYs-uaR3orphw5Au2'
// )

  const {data,isError, isLoading, error} = usePosts("http://api.mediastack.com/v1/news?access_key=5944f6344720b3cf0ff3b2af8be335b5&&limit=3", 'world')

  console.log(isLoading);
  console.log(data);
  if (isLoading) {
    return <h1>Loading pls wait...</h1>
   }

  if (isError) {
    return <h1>{error.message}</h1>
   }

  return (
    <div>
       <CardTesting data={data} section={'World News'}/>
    </div>
  )
}

export default WorldNews