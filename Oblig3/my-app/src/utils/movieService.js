//import movie from '../../../../sanityreact/schemas/documents/movie';
import client from './client'

const movieFields = `
    title,
    'actor': actor->name
`;

export const getMovies = async () => {
    const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`);
    return data;
}