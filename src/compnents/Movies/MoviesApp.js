import { useState } from "react";
import MoviesList from "./MoviesList";
import LoadingSpieer from "../UI/LoadingSpinner";

const MoviesApp = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [ error, setError] = useState(null);
    async function fetchMoviesHandler() {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('https://swapi.dev/api/films2/')

            if(!response.ok) {
                throw new Error('Something went wrong!');
            }    

            const data = await response.json();

            const transformedMovies = data.results.map(movieData => {
                return {
                    id: movieData.episode_id,
                    itile: movieData.itile,
                    openingText: movieData.opening_crawl,
                    releaseDate: movieData.release_date,
                }
            })
            setMovies(transformedMovies);                     
        } catch (error) {
            setError(error.message);            
        }
        setIsLoading(false);  
    }

    let content = <p className="text-5xl ml-64 md:text-center text-blue-400">Information Not Found</p>;

    if(movies.length > 0) {
        content =    <MoviesList movies={movies} />;

    }

    if(error) {
        content = <p className="text-5xl ml-64 text-red-500">{error}</p>;
    }

    if(isLoading) {
        content = <LoadingSpieer />;
    }
    return(      
        <div>
           
        <div class="flex flex-wrap p-5 bg-blue-50">
          <div class="flex w-full bg-white  rounded-lg p-8  justify-center">   
            <div class="flex flex-col px-5 py-1 text-3xl">
                <button onClick={fetchMoviesHandler}>
                    Fetch Movies Information</button>
                </div>
         
           </div>
        </div>
        <div className="flex flex-wrap p5 bg-blue-50">
            <div className="flex w-full bg-white rounded-lg p-8 justify-cener">
                <div className="flex flex-col px-5 py-1">
                <p className="mt-1 flex-1 font-light text-lg text-slate-500">
               {content}
                    </p>
                </div>
            </div>
        </div>

        </div>  
    
    )

}

// {isLoading && movies.length > 0 && <MoviesList movies={movies} />}
// {!isLoading && movies===0 && <p>Not Found</p>}
// {isLoading && <p><LoadingSpieer /></p>}

export default MoviesApp;