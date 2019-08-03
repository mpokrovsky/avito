import React from 'react';
import './App.css';
import FilterCategoryButton from './components/FilterCategoryButton';
import SortForm from './components/SortForm';
import FilterPriceForm from './components/FilterPriceForm';
import CleanFavoriteButton from './components/CleanFavoriteButton';
import ShowFavoriteButton from './components/ShowFavoriteButton';
import ProductList from './components/ProductList';
import load from './load';

const sellersUrl = 'http://avito.dump.academy/sellers';
const productsUrl = 'https://avito.dump.academy/products';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sellers: [],
      data: [],
      favorites: JSON.parse(localStorage.getItem('favorites'))
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
    });
  }
  
  updateData(config) {
    this.setState(config);
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid container-fluid align-items-center">
        <div className="container">
          <h1 className="display-4">This is Avito task</h1>
          <div className="btn-group" style={{ padding: '10px' }}>
            <FilterCategoryButton
              data={this.initialProducts}
              update={this.updateData.bind(this)}
            />
            <div style={{ paddingLeft: '10px' }}>
              <SortForm
                sellers={this.state.sellers}
                data={this.state.data}
                update={this.updateData.bind(this)}
              />
            </div>
            <FilterPriceForm
              data={this.initialProducts}
              update={this.updateData.bind(this)}
            />
            <ShowFavoriteButton
              data={this.state.favorites}
              update={this.updateData.bind(this)}
            />
            <CleanFavoriteButton
              data={this.state.favorites}
              update={this.updateData.bind(this)}
            />
          </div>
          <div>
            <ProductList
              data={this.state.data}
              sellers={this.state.sellers}
              updateData={this.updateData.bind(this)}
              favorites={this.state.favorites}
            />
          </div>
        </div>
      </div>
    )
  }
};
