import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ data, sellers, updateData, favorites }) => {
    if (!data) {
        return (<p>Loading... </p>);
    }
    const cards = data.map(product => {
        const sellerId = product.relationships.seller;
        let seller = {name: 'nothing'};
        for (let i of sellers) {
            if (i.id === sellerId) {
                seller = i;
            }
        }
        //const seller = sellers.find(i => i.id === sellerId);
        return <ProductCard product={product} key={product.id} seller={seller} updateData={updateData} favorites={favorites} />
    })

    return (
        <div className="card-group" >
            <div style={{ paddingLeft: '10%' }}>{cards}</div>
        </div>
    )
}

export default ProductList;
