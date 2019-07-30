import React from 'react';

const FilterPriceForm = ({ data, update }) => {
    const dataSearch = () => {
        const min = document.getElementById('min').value;
        const max = document.getElementById('max').value;
        if (max && min) {
            const filter = data.filter(product => product.price >= min && product.price <= max);
            update({ data: filter });
        } else {
            if (!max && min) {
                const filter = data.filter(product => product.price >= min);
                update({ data: filter });
            } else {
                if (max && !min) {
                    const filter = data.filter(product => product.price <= max);
                    update({ data: filter });
                } else {
                    update({ data: data });
                }
            }
        }
    };

    return (
        <div className="container" style={{ width: '240px' }}>
            Price:
        <div className="row">
                <div className="col-md-6" style={{ padding: '5px' }}>
                    <input type="text" className="form-control form-control-sm" placeholder="from" id="min" onChange={dataSearch}></input>
                </div>
                <div className="col-md-6" style={{ padding: '5px' }}>
                    <input type="text" className="form-control form-control-sm" placeholder="to" id="max" onChange={dataSearch}></input>
                </div>
            </div>
        </div>
    )
}

export default FilterPriceForm;
