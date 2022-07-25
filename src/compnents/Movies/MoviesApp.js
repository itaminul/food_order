import { useState } from "react";
import MoviesList from "./MoviesList";
import LoadingSpieer from "../UI/LoadingSpinner";

const MoviesApp = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    async function fetchMoviesHandler() {
        setIsLoading(true);
        const response = await fetch('https://swapi.dev/api/films/')
            const data = await response.json();
            setIsLoading(false);      
        
            const transformedMovies = data.results.map(movieData => {
                return {
                    id: movieData.episode_id,
                    itile: movieData.itile,
                    openingText: movieData.opening_crawl,
                    releaseDate: movieData.release_date,
                }
            })
            setMovies(transformedMovies);
            setIsLoading(false);

        
    }
    return(      
        <div>
           
        <div class="flex flex-wrap p-5 bg-blue-50">
          <div class="flex w-full bg-white drop-shadow-md rounded-lg p-8  justify-center">   
            <div class="flex flex-col px-5 py-1">
                <button onClick={fetchMoviesHandler} className="mt-1 flex-1 font-light text-lg text-slate-500">
                    Fetch Movies</button>
                </div>
         
           </div>
        </div>
        <div className="flex flex-wrap p5 bg-blue-50">
            <div className="flex w-full bg-white rounded-lg p-8 justify-cener">
                <div className="flex flex-col px-5 py-1">
                <p className="mt-1 flex-1 font-light text-lg text-slate-500">
                {isLoading ? <LoadingSpieer /> : null }
                    <MoviesList movies={movies} />
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