import React, { useState } from 'react';

const SearchInput = ({ getMoviesList }) => {
    const [search, setSearch] = useState('');
    const [type, setType] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };
    const handleFilter = (e) => {
        setType(e.currentTarget.dataset.type);
        getMoviesList(search, e.target.dataset.type);
    };
    return (
        <form className="col s12">
            <div className="row">
                <div className="input-field col s12">
                    <input
                        placeholder="Seach"
                        id="search"
                        type="search"
                        className="validate"
                        value={search}
                        onChange={(e) => handleSearch(e)}
                    />
                    <button
                        className="btn search-btn"
                        onClick={(e) => {
                            e.preventDefault();
                            getMoviesList(search, type);
                        }}
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className="row type-videos">
                <label>
                    <input
                        name="type_video"
                        type="radio"
                        onChange={(e) => handleFilter(e)}
                        checked={type === ''}
                        data-type=""
                    />
                    <span>All</span>
                </label>
                <label>
                    <input
                        name="type_video"
                        type="radio"
                        onChange={(e) => handleFilter(e)}
                        checked={type === 'movie'}
                        data-type="movie"
                    />
                    <span>Movies only</span>
                </label>
                <label>
                    <input
                        name="type_video"
                        type="radio"
                        onChange={(e) => handleFilter(e)}
                        checked={type === 'series'}
                        data-type="series"
                    />
                    <span>Series only</span>
                </label>
                <label>
                    <input
                        name="type_video"
                        type="radio"
                        onChange={(e) => handleFilter(e)}
                        checked={type === 'episode'}
                        data-type="episode"
                    />
                    <span>Episode only</span>
                </label>
            </div>
        </form>
    );
};

export default SearchInput;
