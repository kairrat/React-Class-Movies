import React from "react";

const Movie = (props) => {
    const {
        Title: title,
        imdbID: id,
        Type: type,
        Poster: poster,
        Year: year,
    } = props;
    return (
        <div id={id} className="card movie">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={poster} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    {title}
                    <i className="material-icons right">{year}</i>
                </span>

                <p>{type}</p>
            </div>
        </div>
    );
};

export default Movie;
