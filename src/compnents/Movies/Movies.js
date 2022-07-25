const Movies = (props) => {
    return(
        <div>
            <li>
                <h2>{props.title}</h2>
                <h2>{props.openingText}</h2>
                <h2>{props.releaseDate}</h2>
            </li>         
        </div>
    )

}

export default Movies;