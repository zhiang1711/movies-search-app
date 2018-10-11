import React from 'react';
import './Search.css';

const Details = ({details}) => {
    console.log(details);
    const {Title, Year, Type, Genre, Poster, imdbRating, Plot, Released, Country, Language, Actors, Director} = details;
    return (
        <div className="row">
            <div className="col l2 hide-on-med-and-down"></div>
            <div className="col l8 m12 s12">
                <div className="card horizontal">
                  <div className="card-image">
                    <img src={Poster} alt={Title} className="posterDetails"/>
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                        <p className="card-title">{Title}</p>
                        <p><b>Country:</b> {Country}</p>
                        <p><b>Language:</b> {Language}</p>
                        <p><b>Genre:</b> {Genre}</p>
                        <p><b>Imdb rating:</b> {imdbRating}</p>
                        <p><b>Year:</b> {Year}</p>
                        <p><b>Type:</b> {Type}</p>
                        <p><b>Released:</b> {Released}</p>
                        <p><b>Actors:</b> {Actors}</p>
                        <p><b>Director:</b> {Director}</p>
                        <p><b>Plot:</b> <i>{Plot}</i></p>
                    </div>
                    <div className="card-action">
                        <a href="/">Back</a>
                    </div>
                  </div>

                </div>
            </div>
            <div className="col l2 hide-on-med-and-down"></div>
        </div>
    )
}

export default Details;
