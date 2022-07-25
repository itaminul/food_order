import Movies from "./Movies";
const MoviesList = (props) => {
    return(
        <div>
            <ul>
                {props.movies.map((movie) => (
                     <Movies
                     title={movie.title} 
                     openingText={movie.openingText} 
                     releaseDate={movie.releaseDate} 
                     />        

                ))}
           
            </ul>           
        </div>
    )

}

export default MoviesList;