import React from 'react';
import Card from './Card';
import load from '../load';


const sellersUrl = 'http://avito.dump.academy/sellers';
const productsUrl = 'https://avito.dump.academy/products';

export default class Block extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            sellers: []
        }
        this.loadData();
    }

    loadData() {
        load(productsUrl).then(items => {
            const array = JSON.parse(items).data;
            this.setState({ products: array })
        });
        load(sellersUrl).then(items => {
            const array = JSON.parse(items).data;
            this.setState({ sellers: array })
        })
    }

    updateData(config) {
        this.setState(config);
      }

    render() {
        return (
            <div className="row">
                {this.state.products.map(product => {
                    return (
                        <div className="col-sm-4 py-2" style={{padding: '1%'}}>
                            <div className="card h-100 bg-light border-secondary">
                                <Card key={product.id} product={product} sellers={this.state.sellers} />
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
