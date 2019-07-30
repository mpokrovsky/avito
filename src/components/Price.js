import React from 'react';

const Price = ({ price }) => {
    let res;
    if (!price) {
        res = 'Price is not specified';
    } else {
        const regExp = /(\d)(?=(\d\d\d)+([^\d]|$))/g;
        res = <>Price: {Number(price).toString().replace(regExp, '$1 ')}</>;
    }
    return (
        <div className="price">
            {res}
        </div>
    )
}

export default Price;
