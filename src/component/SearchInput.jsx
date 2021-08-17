import React, { Component } from 'react';

class SearchInput extends Component {
    state = {
        search: '',
        type: '',
    };
    handleSearch(e) {
        this.setState({
            search: e.target.value,
        });
    }
    handleFilter(e) {
        this.setState(
            {
                type: e.currentTarget.dataset.type,
            },
            () => {
                this.props.getMoviesList(this.state.search, this.state.type);
            }
        );
    }
    render() {
        return (
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            placeholder="Seach"
                            id="search"
                            type="search"
                            className="validate"
                            value={this.state.search}
                            onChange={(e) => this.handleSearch(e)}
                        />
                        <button
                            className="btn search-btn"
                            onClick={(e) => {
                                e.preventDefault();
                                this.props.getMoviesList(
                                    this.state.search,
                                    this.state.type
                                );
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
                            onChange={(e) => this.handleFilter(e)}
                            checked={this.state.type === ''}
                            data-type=""
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            name="type_video"
                            type="radio"
                            onChange={(e) => this.handleFilter(e)}
                            checked={this.state.type === 'movie'}
                            data-type="movie"
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input
                            name="type_video"
                            type="radio"
                            onChange={(e) => this.handleFilter(e)}
                            checked={this.state.type === 'series'}
                            data-type="series"
                        />
                        <span>Series only</span>
                    </label>
                    <label>
                        <input
                            name="type_video"
                            type="radio"
                            onChange={(e) => this.handleFilter(e)}
                            checked={this.state.type === 'episode'}
                            data-type="episode"
                        />
                        <span>Episode only</span>
                    </label>
                </div>
            </form>
        );
    }
}

export default SearchInput;
