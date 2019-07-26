import React from 'react';
import './App.css';
import Block from './components/Block';
import productsData from './data/products';
import SortButtons from './components/SortButtons';
import FilterButtons from './components/FilterButtons';
import load from './utils/load';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
    this.loadData();
  }

  loadData() {
    load(this.props.data).then(items => {
      this.initialData = JSON.parse(items);
      this.setState({ data: this.initialData });
    });
  }

  render() {
    return (
      <div class="jumbotron jumbotron-fluid container-fluid align-items-center">
        <div class="container">
          <h1 class="display-4">This is Avito task</h1>
          {this.initialData.map(item => {
            return  <p>{item} </p>
          })}
         

        </div>
      </div>
    )
  }
}
//<Block data={products} />

/*
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
    this.loadData();
  }

  loadData() {
    load(this.props.data).then(items => {
      this.setState({
        data: items
      });
    });
  }
  

  render() {
    return (
      <div class="jumbotron jumbotron-fluid container-fluid align-items-center">
        <div class="container">
          <h1 class="display-4">This is Avito task</h1>

          <div className="btn-toolbar">
            <div className="btn-group mr-2 sort-buttons"><SortButtons /></div>
            <div className="btn-group filter-buttons"><FilterButtons /></div>
          </div>
          <Block products={this.state.data} />
        </div>
      </div>
    )
  }
}

*/