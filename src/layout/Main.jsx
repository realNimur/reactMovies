import React, { useState, useEffect } from 'react';
import Movies from '../component/Movies';
import Preloader from '../component/Preloader';
import SearchInput from '../component/SearchInput';

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then((res) => res.json())
            .then((data) => setMovies(data.Search), setLoading(false));
    }, []);

    const getMoviesList = (movieName, type = '') => {
        setLoading(true);
        fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}${
                type !== '' ? `&type=${type}` : ''
            }`
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.Response === 'True') {
                    setMovies(data.Search);
                    setLoading(false);
                } else {
                    setMovies([]);
                    setLoading(false);
                }
            });
    };
    return (
        <>
            <main className="container content">
                <SearchInput getMoviesList={getMoviesList} />

                {loading ? <Preloader /> : <Movies movies={movies} />}
            </main>
        </>
    );
};

export default Main;
