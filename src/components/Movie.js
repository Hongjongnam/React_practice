// 반복문

const Movie = ({ movie, removeMovie }) => {
    return (
        <div>
            <div>
                {movie.title}
                <span>
                    ({movie.year})
                </span>
            </div>
            <div>
                <button onClick={() => removeMovie(movie.id)}>
                    삭제
                </button>
            </div>
        </div>
    )
}

export default Movie