import React, { useState } from 'react';
import { getMovies } from '../utils/movieService';
import Movie from './Movie'

const Movies = () => {

    const clickFunc = async () => {
        const data = await getMovies();
        setMovies(data);
    }

    const [movies, setMovies] = useState([]);
    return(
        <>
            {/*{movies?.length > 0 ? <p>{JSON.stringify(movies)}</p> : null}*/}
            
            {movies.map(movie => <Movie title={movie.title} actor={movie.actor} />) }

            
            <button onClick={clickFunc}>Click me</button>
            
        </>
    )

}
export default Movies;


