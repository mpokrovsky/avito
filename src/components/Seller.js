import React from 'react';

export default class Seller extends React.Component {
    render() {
        const sellerID = this.props.id;
        const sellers = this.props.data;
        const sellerFound = sellers.find(i => i.id === sellerID);
        return(
            <div className="seller">
                <p>{sellerFound.name}, rating: {sellerFound.rating}</p>
            </div>
        )
    }
}
