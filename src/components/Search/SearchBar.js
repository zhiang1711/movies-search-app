import React, { Component } from 'react';
import SearchList from './SearchList';
const axios = require('axios');

class SearchBar extends Component {

    state = {
        results:[],
        searchInput: '',
        isFetching: false
    }

    searchInputChange = e => {
        this.setState({
            searchInput: e.target.value,
            isFetching: true
        })
        const API_KEY = 'e7a42390';
        const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${e.target.value}`;
        axios.get(URL)
            .then(res => {
                if (res.data.Response === "True") {
                    // console.log(res.data);
                    this.setState({
                        results: res.data.Search,
                        isFetching: false
                    })
                } else {
                    this.setState({
                        results: [],
                        isFetching: false
                    })
                }
            })
        .catch(err => console.log(err))

    }
    render() {
        const {results, searchInput, isFetching} = this.state;
        return (
            <div className="row">
                <div className="col l2 hide-on-med-and-down"></div>
                <div className="input-field col l8 m12 s12">
                    <input type="text" id="search" placeholder="Please enter title name... " value={searchInput} onChange={this.searchInputChange}/>
                    <label for="search">Search</label>
                    {
                        isFetching && <p>LOADING...</p>
                    }

                </div>
            <div className="col l2 hide-on-med-and-down"></div>
            {
                !isFetching && searchInput.trim() !== '' && <SearchList results={results} />
            }
            </div>
        )
    }
}


export default SearchBar;
