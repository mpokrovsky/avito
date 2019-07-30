import React from 'react';

const FilterCategoryButton = ({ data, update }) => {
    const dataSearch = (category) => {
        const filter = data.filter(product => product.category === category);
        update({ data: filter });
    };
    return (
        <div>
            Choose category:
        <br></br>
            <button type="button" className="btn btn-outline-primary" onClick={() => dataSearch('auto')}>Auto</button>
            <button type="button" className="btn btn-outline-primary" onClick={() => dataSearch('cameras')}>Cameras</button>
            <button type="button" className="btn btn-outline-primary" onClick={() => dataSearch('immovable')}>Immovable</button>
            <button type="button" className="btn btn-outline-primary" onClick={() => dataSearch('laptops')}>Laptops</button>
        </div>
    )
}

export default FilterCategoryButton;
