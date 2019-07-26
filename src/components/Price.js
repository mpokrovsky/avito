import React from 'react';

export default class Price extends React.Component {
    render() {
        const price = this.props.data;
        let res;
        if (!price) {
            res = 'Price is not specified';
        } else {
            const regExp = /(\d)(?=(\d\d\d)+([^\d]|$))/g;
            res = <p>Price: {Number(price).toString().replace(regExp, '$1 ')}</p>;
        }
        return(
            <div className="price">
                {res}
            </div>
        )
    }
}
