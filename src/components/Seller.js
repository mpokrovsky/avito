import React from 'react';
/*
export default class Seller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.loadData();
    }

    loadData() {
        load(sellersUrl).then(items => {
            const array = JSON.parse(items).data;
            this.setState({ data: array })
        })
    }

    render() {
        const { sellerID } = this.props;
        const sellerFound = this.state.data.find(i => sellerID === i.id);
        return (
            <p>Seller
            {sellerID}
            </p>
        )
    }
}
//<p>{sellerFound.name}, rating: {sellerFound.rating}</p>*/