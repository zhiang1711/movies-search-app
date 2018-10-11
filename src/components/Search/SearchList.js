import React from 'react';
import './Search.css';

const ItemList = (props) => {
    const { Title, Year, Type, Poster, imdbID } = props.result;
    let linkToDetails = "/" + imdbID;
    return (
        <div className="col s12 m6 l6">
            <div className="card horizontal">
              <div className="card-image">
                <img src={Poster} alt={Title} className="posterImg"/>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                    <span className="card-title">{Title}</span>
                    <p>Year: {Year}</p>
                    <p>Type: {Type}</p>
                </div>
                <div className="card-action">
                  <a href={linkToDetails}>Details</a>
                </div>
              </div>
            </div>
        </div>
    )
}

const SearchList = (props) => {
    if (props.results.length !== 0) {
        return (
            <div className="row">
                {props.results.map(result => {
                    return (
                        <ItemList result={result} key={result.imdbID}/>
                    )
                })}
            </div>
        )
    } else {
        return (
            <p> No results.. </p>
        )
    }

}

export default SearchList;
