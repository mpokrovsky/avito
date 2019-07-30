import React from 'react';
import Price from './Price';
import AddToFavoriteButton from './AddToFavoriteButton';

const ProductCard = ({ product, seller, updateData, favorites }) => {
    return (
      <div className="card mb-3 bg-light border-secondary mx-auto" style={{ maxWidth: '600px' }}>
        <div className="row no-gutters">
          <div className="col-md-7">
            <img src={product.pictures[0]} className="card-img" alt="mainPicture" />
          </div>
          <div className="col-md-5">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <div className="card-text">
                <p>There are {product.pictures.length - 1} additional photos</p>
                <p><Price price={product.price} /></p>
                <p>Seller: {seller.name}</p>
                <p>Rating: {seller.rating}</p>
              </div>
              <AddToFavoriteButton prod={product} updateData={updateData} favorites={favorites} />
            </div>
          </div>
        </div>
      </div>
    )
  };

export default ProductCard;
