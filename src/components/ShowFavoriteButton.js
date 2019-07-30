import React from 'react';

const ShowFavoriteButton = ({ data, update }) => {
    const dataSearch = () => {
        const parsedFavorites = JSON.parse(localStorage.getItem('favorites'));
        update({ data: parsedFavorites });
    };

    return (
        <div>
            Favorites:
        <br></br>
            <button type="button" className="btn btn-outline-primary" onClick={dataSearch}>Show</button>
        </div>
    )
}

export default ShowFavoriteButton;
