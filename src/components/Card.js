import React from 'react';
import Seller from './Seller';
import Price from './Price';
import sellersData from '../data/sellers';
import style from './Card.css'

export default class Card extends React.Component {
  state = {
    favorite: false
  }

  render() {
    const { title, pictures, price, relationships } = this.props.data;

    return (
      <div className="card bg-light border-secondary" style={style}>
        <img class="card-img-top" src={pictures[0]} alt="mainPicture" />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">
              There are {pictures.length - 1} additional photos
              <Seller id={relationships.seller} data={sellersData} />
              <Price data={price} />
            </p>
            <a href="#" class="btn btn-primary">Add to favorites</a>
          </div>

    
        </div>
        )
      }
    }
  