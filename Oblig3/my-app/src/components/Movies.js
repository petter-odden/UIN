import React from 'react';

const Movies = () => {
    const clickFunc = () => {}
    const [state, setState] = useState('');
    return(
        <>
            <button onClick={clickFunc}>Click me</button>
        </>
    )

}
export default Movies;