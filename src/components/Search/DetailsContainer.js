import React, { Component } from 'react';
import Details from './Details';
const axios = require('axios');


class DetailsContainer extends Component {
    state = {
        details: null
    }
    componentDidMount() {
        const API_KEY = 'e7a42390';
        const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${this.props.match.params.id}&plot=full`;
        axios.get(URL)
            .then(res => {
                this.setState({
                    details: res.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        // console.log(this.props.match.params.id);
        if(this.state.details !== null) {
            return (
                <Details details={this.state.details}/>
            )
        } else {
            return (
                <p>Loading...</p>
            )
        }

    }
}

export default DetailsContainer;
