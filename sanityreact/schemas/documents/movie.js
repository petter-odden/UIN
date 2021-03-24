const movie = {
    title: 'Movie',
    name: 'movie',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Actor',
            name: 'actor',
            type: 'reference',
            to: [ // The "to"-property must be set, and it must be an array of at least one type
                {
                type: 'actor', // type is required
                }
            ]
        }
    ]
}
export default movie