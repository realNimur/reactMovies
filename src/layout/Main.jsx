import React from 'react';
import Movies from '../component/Movies';
import Preloader from '../component/Preloader';
import SearchInput from '../component/SearchInput';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then((res) => res.json())
            .then((data) =>
                this.setState({
                    movies: data.Search,
                    loading: false,
                })
            );
    }

    getMoviesList = (movieName, type = '') => {
        this.setState({
            loading: true,
        });
        fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}${
                type !== '' ? `&type=${type}` : ''
            }`
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.Response === 'True') {
                    this.setState({
                        movies: data.Search,
                        loading: false,
                    });
                } else {
                    this.setState({
                        movies: [],
                        loading: false,
                    });
                }
            });
    };

    render() {
        const { movies, loading } = this.state;
        return (
            <>
                <main className="container content">
                    <SearchInput getMoviesList={this.getMoviesList} />

                    {loading ? <Preloader /> : <Movies movies={movies} />}
                </main>
            </>
        );
    }
}
export default Main;
