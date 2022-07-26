const Movies = (props) => {
    return(
        <div>
            <li  className="text-5xl">
                <h2>{props.title}</h2>
            </li>         
            <li>
            <p>{props.openingText}</p>
            </li>
            <li>
            <h2>{props.releaseDate}</h2>
            </li>
        </div>
    )

}

export default Movies;