import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ data, sellers, updateData, favorites }) => {
    if (!data) {
        return (<p>Loading... </p>);
    }
    const cards = data.map(product => {
        const sellerId = product.relationships.seller;
        let seller = {};
        for (let i of sellers) {            //const seller = sellers.find(i => i.id === sellerId);
            if (i.id === sellerId) {        //
                seller = i;                 //
            }                               //
        }                                   //
        
        return <ProductCard product={product} key={product.id} seller={seller} updateData={updateData} favorites={favorites} />
    })

    return (
        <div className="card-group" >
            <div style={{ paddingLeft: '10%' }}>{cards}</div>
        </div>
    )
}

export default ProductList;
