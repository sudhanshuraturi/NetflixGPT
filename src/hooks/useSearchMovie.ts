import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";


const useMovieTrailer = (query: string) => {
    
    // search movie in TMDB
    const searchMovieTMDB = async (query: string) => {
       const data = await fetch(
         "https://api.themoviedb.org/3/search/movie?query=" +
           query +
           "&include_adult=false&language=en-US&page=1",
         API_OPTIONS
       );
       const json = await data.json();
    
       return json.results;
     };
    
    useEffect(() => {
      if(query){
          searchMovieTMDB(query);

      } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);
  };
  
  export default useMovieTrailer;