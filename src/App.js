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
      <div class="jumbotron jumbotron-fluid container-fluid align-items-center">
        <div class="container">
          <h1 class="display-4">This is Avito task</h1>
          <div className="btn-toolbar">
            <FilterCategoryButton data={this.initialProducts} update={this.updateData.bind(this)} />
            <FilterPriceForm data={this.initialProducts} update={this.updateData.bind(this)} />
            <SortForm initialData={this.initialData} data={this.state.data} update={this.updateData.bind(this)} />
          </div>
          <ProductList data={this.state.data} sellers={this.state.sellers} />
        </div>
      </div>
    )
  }
}

const ProductCard = ({ product, seller }) => {
  return (
    <div class="card mb-3" style={{ maxWidth: '540px' }}>
      <div class="row no-gutters">
        <div class="col-md-7">
          <img src={product.pictures[0]} class="card-img" alt="mainPicture" />
        </div>
        <div class="col-md-5">
          <div class="card-body">
            <h5 class="card-title">{product.title}</h5>
            <p class="card-text">
              There are {product.pictures.length - 1} additional photos
              <Price price={product.price} />
              <p>Seller: {}</p>
              <p>Rating: {}</p>
            </p>
            <a href="#" class="btn btn-primary">Add to favorites</a>
          </div>
        </div>
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
    return <ProductCard product={product} key={product.id} seller={seller} />
  })

  return (
    <div class="card-group">
      <div className="card h-100 bg-light border-secondary">
        <p>{cards}</p>
      </div>
    </div>

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
    <div className="container" style={{ width: '240px' }}>
      Price:
      <div class="row ">
        <div class="col-md-6">
          <input type="text" class="form-control form-control-sm" placeholder="from" id="min" onChange={dataSearch}></input>
        </div>
        <div class="col-md-6">
          <input type="text" class="form-control form-control-sm" placeholder="to" id="max" onChange={dataSearch}></input>
        </div>
      </div>
    </div>
  )
}

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
        <button type="button" class="btn btn-outline-primary" onClick={() => this.sort('id')}>By popularity</button>
        <button type="button" class="btn btn-outline-primary" onClick={() => this.sort('price')}>By price</button>
      </div>
    )
  }
}


const Price = ({ price }) => {
  let res;
  if (!price) {
    res = 'Price is not specified';
  } else {
    const regExp = /(\d)(?=(\d\d\d)+([^\d]|$))/g;
    res = <p>Price: {Number(price).toString().replace(regExp, '$1 ')}</p>;
  }
  return (
    <div className="price">
      {res}
    </div>
  )
}