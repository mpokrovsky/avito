import React from 'react';
import Card from './Card';

export default class Block extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <div className="row">
                {data.map(product => {
                    return (
                        <div className="col-sm-4 py-2">
                            <div className="card h-100 bg-light border-secondary">
                                <Card key={product.id} data={product} />
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
