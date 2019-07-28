import React from 'react';
import './App.css';
import load from './load';

const sellersUrl = 'http://avito.dump.academy/sellers';
const productsUrl = 'https://avito.dump.academy/products';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      sellers: []
    }
    this.loadData();
  }

  loadData() {
    load(productsUrl).then(items => {
      this.initialProducts = JSON.parse(items).data;
      this.setState({ data: this.initialProducts })
    });
    load(sellersUrl).then(items => {
      this.initialSellers = JSON.parse(items).data;
      this.setState({ sellers: this.initialSellers })
    })
  }

  updateData(config) {
    this.setState(config);
  }

  render() {
    return (
      <div>
        <h1>This is Avito task</h1>
        <FilterCategoryButton data={this.initialProducts} update={this.updateData.bind(this)} />
        <FilterPriceForm data={this.initialProducts} update={this.updateData.bind(this)} />

        <div>
          <ProductList data={this.state.data} sellers={this.state.sellers}/>
        </div>
      </div>
    )
  }
}
//{this.initialSellers.find(i => i.id === product.relationships.seller).name}
const ProductCard = ({ product, seller }) => {
  return (
    <div>
      <div>
        <p>product={product.title}</p>
        <p>price={product.price}</p>
        <p>seller={seller.name}</p>
        <p>rating={}</p>
        <hr></hr>
      </div>
    </div>
  )
};

const ProductList = ({ data, sellers }) => {
  if (!data) {
    return (<p>Loading... </p>);
  }
  const cards = data.map(product => {
    const seller = sellers.find(i => i.id === product.relationships.seller);
    return <ProductCard product={product} key={product.id} seller={seller}/>
  })

  return (
    <p>{cards}</p>
  )
}

const FilterCategoryButton = ({ data, update }) => {
  const dataSearch = (category) => {
    const filter = data.filter(product => product.category === category);
    update({ data: filter });
  };
  return (
    <div>
      Choose category:
      <br></br>
      <button type="button" class="btn btn-outline-primary" onClick={() => dataSearch('auto')}>Auto</button>
      <button type="button" class="btn btn-outline-primary" onClick={() => dataSearch('cameras')}>Cameras</button>
      <button type="button" class="btn btn-outline-primary" onClick={() => dataSearch('immovable')}>Immovable</button>
      <button type="button" class="btn btn-outline-primary" onClick={() => dataSearch('laptops')}>Laptops</button>
    </div>
  )
}

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
    <div className="container" style={{ width: '130px' }}>
      Price:
      <input type="text" class="form-control form-control-sm" placeholder="from" id="min" onChange={dataSearch}></input>
      <input type="text" class="form-control form-control-sm" placeholder="to" id="max" onChange={dataSearch}></input>
    </div>
  )
}


