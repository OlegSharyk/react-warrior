import React, { Component } from 'react';

class MovieItem extends Component {
    constructor() {
        super();

        this.state = {
            willWatch: false,
        };
    }

    // componentWillUnmount() {
    //     console.log('unmount', this.props.movie.title);
    // }

    render() {
        const {
            movie,
            removeMovie,
            addMovieToWillWatch,
            removeMovieFromWillWatch,
        } = this.props;
        return (
            <div className="card">
                <img
                    className="card-img-top"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
                        movie.poster_path}`}
                    alt=""
                />
                <div className="card-body">
                    <h6 className="card-title">{movie.title}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0">Rating: {movie.vote_average}</p>
                        {this.state.willWatch ? (
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => {
                                    this.setState({ willWatch: false });
                                    removeMovieFromWillWatch(movie);
                                }}
                            >
                                Remove Will Watch
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => {
                                    this.setState({ willWatch: true });
                                    addMovieToWillWatch(movie);
                                }}
                            >
                                Will Watch
                            </button>
                        )}
                        <button
                            onClick={removeMovie.bind(this, movie)}
                            className="btn btn-danger"
                            disabled={this.state.willWatch}
                        >
                            delete
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieItem;

// MovieItem
// <div className="card">
//     <img
//         className="card-img-top"
//         src={`https://image.tmdb.org/t/p/w500${item.backdrop_path ||
//             data.poster_path}`}
//         alt=""
//     />
//     <div className="card-body">
//         <h6 className="card-title">{data.title}</h6>
//         <div className="d-flex justify-content-between align-items-center">
//             <p className="mb-0">Rating: {data.vote_average}</p>
//             <button type="button" className="btn btn-secondary">
//                 Will Watch
//             </button>
//         </div>
//     </div>
// </div>;
// MovieListWillWatch
// <h4>Will Watch: movies</h4>
// <ul className="list-group">
//     <li className="list-group-item">
//       <div className="d-flex justify-content-between">
//       </div>
//     </li>
//   ))}
// </ul>
