import { useQuery } from "@tanstack/react-query"
// import axios from 'axios'

function usePosts(url, queryString) {


  const {data, isLoading, isError, error } = useQuery({queryKey: [`${queryString}`], queryFn: () => fetch(url).then(res => res.json())})

    return [data, isLoading, isError, error];
  }

export default usePosts