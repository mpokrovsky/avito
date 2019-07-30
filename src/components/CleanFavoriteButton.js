import React from 'react';

const CleanFavoriteButton = ({ data, update }) => {
    const dataRemove = () => {
        localStorage.setItem('favorites', JSON.stringify([]));
        update({ favorites: [] });
    };

    return (
        <div>
        <br></br>
            <button type="button" className="btn btn-outline-primary" onClick={dataRemove}>Clean</button>
        </div>
    )
}

export default CleanFavoriteButton;
