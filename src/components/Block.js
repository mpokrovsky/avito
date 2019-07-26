import React from 'react';
import Card from './Card';

export default class Block extends React.Component {
    render() {
        const { data } = this.props.data;
        return (
            <div className="card-columns">
                    {data.map(product => {
                        return (
                            <div className="card">
                            <p>!!!!!!!!!!!{product.title}</p>
                            <br></br>
                            </div>
                        )
                    })
                }              
            </div>
        )
    }
}
//<Card key={product.id} data={product} />