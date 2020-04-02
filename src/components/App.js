import React, { Component } from 'react';
// import { moviesData } from '../moviesData.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieItem from './MovieItem';
import MovieTabs from './MovieTabs';
import Pagination from './Pagination';
import { API_KEY_3, API_URL } from '../utils/api';

// console.log(moviesData);

// UI = fn(state, props)

// function removeMovie(movie) {
//     const updateMovies = this.state.movies.filter(function(item) {
//         return item.id !== movie.id;
//     });
//     console.log(updateMovies);
//     this.setState({ movies: updateMovies });
// }

class App extends Component {
    constructor() {
        super();

        this.state = {
            movies: [],
            moviesWillWatch: [],
            sort_by: 'popularity.desc',
            totalPages: 0,
            currentPage: 1,
        };

        // this.removeMovie = this.removeMovie.bind(this)
    }

    componentDidMount() {
        this.getMovies();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.sort_by !== this.state.sort_by) {
            this.getMovies();
        }
    }

    getMovies = () => {
        fetch(
            `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`,
        )
            .then(response => {
                // // console.log(response);
                return response.json();
            })
            .then(data => {
                // console.log(data);
                this.setState({
                    movies: data.results,
                    totalPages: data.total_pages,
                    currentPage: data.page,
                });
            });
    };

    removeMovie = movie => {
        const updateMovies = this.state.movies.filter(function(item) {
            return item.id !== movie.id;
        });
        // console.log(updateMovies);
        this.setState({ movies: updateMovies });
    };

    addMovieToWillWatch = movie => {
        // const updateMoviesWillWatch = [...this.state.moviesWillWatch];
        // updateMoviesWillWatch.push(movie);

        const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];
        this.setState({ moviesWillWatch: updateMoviesWillWatch });
    };

    removeMovieFromWillWatch = movie => {
        const updateMoviesWillWatch = this.state.moviesWillWatch.filter(
            function(item) {
                return item.id !== movie.id;
            },
        );
        // console.log(updateMovies);
        this.setState({ moviesWillWatch: updateMoviesWillWatch });
    };

    updateSortBy = value => {
        this.setState({ sort_by: value });
    };

    onNextButtonClick = value => {
        if (this.state.currentPage === this.state.totalPages) {
            return false;
        }

        fetch(
            `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${
                this.state.sort_by
            }&page=${this.state.currentPage + 1}`,
        )
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    movies: data.results,
                    totalPages: data.total_pages,
                    currentPage: data.page,
                });
            });
    };

    onPrevButtonClick = value => {
        if (this.state.currentPage === 1) {
            return false;
        }

        fetch(
            `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${
                this.state.sort_by
            }&page=${this.state.currentPage - 1}`,
        )
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    movies: data.results,
                    totalPages: data.total_pages,
                    currentPage: data.page,
                });
            });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <div className="row  mb-4 mt-4">
                            <div className="col-12">
                                <MovieTabs
                                    sort_by={this.state.sort_by}
                                    updateSortBy={this.updateSortBy}
                                />
                            </div>
                        </div>
                        <div className="row">
                            {this.state.movies.map((movie, index) => {
                                return (
                                    <div className="col-6 mb-4" key={movie.id}>
                                        <MovieItem
                                            movie={movie}
                                            removeMovie={this.removeMovie}
                                            removeMovieFromWillWatch={
                                                this.removeMovieFromWillWatch
                                            }
                                            addMovieToWillWatch={
                                                this.addMovieToWillWatch
                                            }
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-3">
                        <h4>Will watch: {this.state.moviesWillWatch.length}</h4>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <div className="d-flex justify-content-between"></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row  mb-4 mt-4">
                    <div className="col-12">
                        <Pagination
                            onNextButtonClick={this.onNextButtonClick}
                            onPrevButtonClick={this.onPrevButtonClick}
                            totalPages={this.state.totalPages}
                            currentPage={this.state.currentPage}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
