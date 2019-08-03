import React from 'react';

class SortForm extends React.Component {
    constructor(props) {
        super(props);
        this.sorted = {
            id: true,
            price: true
        };
    }

    sort(type) {
        const getRating = product => {
            const sellerId = product.relationships.seller;
            let seller = {};
            for (let i of sellers) {
                if (i.id === sellerId) {
                    seller = i;
                }
            }
            return seller.rating;
        }
        const { sellers, data, update } = this.props;
        const isSorted = this.sorted[type];

        let direction = isSorted ? 1 : -1;

        if (type === 'seller') {
            const sorted = [].slice.call(data).sort((prod1, prod2) => {
                const rating1 = getRating(prod1);
                const rating2 = getRating(prod2);
                if (rating1 === rating2) { return 0; }
                return rating1 > rating2 ? direction : direction * -1;
            })

            this.sorted[type] = !isSorted;

            update({ data: sorted });
        } else {
            const sorted = [].slice.call(data).sort((a, b) => {
                if (a[type] === b[type]) { return 0; }
                return a[type] > b[type] ? direction : direction * -1;
            });

            this.sorted[type] = !isSorted;

            update({ data: sorted });
        }


    }

    render() {
        return (
            <div>
                Sort parameter:
        <br></br>
                <button type="button" className="btn btn-outline-primary" onClick={() => this.sort('seller')}>By popularity</button>
                <button type="button" className="btn btn-outline-primary" onClick={() => this.sort('price')}>By price</button>
            </div>
        )
    }
}

export default SortForm;
