import React from 'react';

const Movie = ({title, actor}) => {
    return(
    <>
        <h1>{title}</h1>
        <p>Starring: {actor}</p>
    </>);
}


export default Movie;