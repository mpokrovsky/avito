import React from 'react';
import Price from './Price';


export default class Card extends React.Component {
    render() {
        const { title, pictures, price, relationships } = this.props.product;
        const sellerID = relationships.seller;
        //const sellerFound = this.props.sellers.find(i => i.id === sellerID);
        
        return (
            <div className="card bg-light">
                <img class="card-img-top" src={pictures[0]} alt="mainPicture" />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">
                        There are {pictures.length - 1} additional photos
                        

                        <Price data={price} />
                        
                    </p>
                    <a href="#" class="btn btn-primary">Add to favorites</a>
                </div>
            </div>
        )
    }
}