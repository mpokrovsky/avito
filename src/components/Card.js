import React from 'react';
//import Seller from './Seller';
//import Price from './Price';


const sellersUrl = 'http://avito.dump.academy/sellers';


export default class Card extends React.Component {
    render() {
        const { title, pictures, price, relationships } = this.props.data;
        return (
            <div className="card bg-light">
                <img class="card-img-top" src={pictures[0]} alt="mainPicture" />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">
                        There are {pictures.length - 1} additional photos
                
                    </p>
                    <a href="#" class="btn btn-primary">Add to favorites</a>
                </div>


            </div>
        )
    }
}
//<Seller id={relationships.seller} data={sellersUrl} />
//<Price data={price} />