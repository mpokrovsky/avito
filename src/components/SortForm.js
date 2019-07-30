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
        const { data, update } = this.props;
        const isSorted = this.sorted[type];

        let direction = isSorted ? 1 : -1;

        const sorted = [].slice.call(data).sort((a, b) => {
            if (a[type] === b[type]) { return 0; }
            return a[type] > b[type] ? direction : direction * -1;
        });

        this.sorted[type] = !isSorted;

        update({ data: sorted });
    }

    render() {
        return (
            <div>
                Sort parameter:
        <br></br>
                <button type="button" className="btn btn-outline-primary" onClick={() => this.sort('id')}>By popularity</button>
                <button type="button" className="btn btn-outline-primary" onClick={() => this.sort('price')}>By price</button>
            </div>
        )
    }
}

export default SortForm;
