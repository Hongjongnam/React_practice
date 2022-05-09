import React, { useState } from 'react'
import InputField from './InputField'


const MovieForm = ({ addMovie }) => {
    const [movieTitle, setMovieTitle] = useState('')
    const [movieYear, setMovieYear] = useState('')
    const [titleError, setTitleError] = useState('')
    const [yearError, setYearError] = useState('')
    // const [movies, setMovies] = useState([])

    // const addMovie = (movie) => {
    //     setMovies([
    //         ...movies,
    //         movie,
    //     ])
    // }

    const resetForm = () => {
        setMovieTitle('')
        setMovieYear('')
    }

    const validateForm = () => {
        resetErrors()
        let validated = true;
        if (!movieTitle) {
            setTitleError('영화제목을 넣어주세요')
            validated = false
        }
        if (!movieYear) {
            setYearError('개봉년도를 넣어주세요')
            validated = false
        }
        return validated;
    }

    const resetErrors = () => {
        setTitleError('')
        setYearError('')
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            addMovie({
                id: Date.now(),
                title: movieTitle,
                year: movieYear
            })
            resetErrors()
            resetForm()
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <InputField
                type="text"
                value={movieTitle}
                placeholder="Movie Title"
                onChange={e => setMovieTitle(e.target.value)}
                errorMessage={titleError}
            />
            <InputField
                type="number"
                value={movieYear}
                placeholder="Movie Year"
                onChange={e => setMovieYear(e.target.value)}
                errorMessage={yearError}
            />
            {/* <input type="text"
                value={movieTitle}
                placeholder='Movie Title'
                onChange={e => setMovieTitle(e.target.value)}
            >
            </input><br />
            <div style={{ color: 'red' }}>{titleError}</div> */}
            {/* <input type="number"
                value={movieYear}
                placeholder='개봉년도'
                onChange={e => setMovieYear(e.target.value)}
            >
            </input><br />
            <div style={{ color: 'red' }}>{yearError}</div> */}
            <button>영화추가</button>
            <br />
        </form>
    )
}

export default MovieForm