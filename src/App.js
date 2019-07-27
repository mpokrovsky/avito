import React from 'react';
import './App.css';
import Block from './components/Block';
import SortButtons from './components/SortButtons';
import FilterButtons from './components/FilterButtons';
import load from './load';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.loadData();
  }

  loadData() {
    load('https://avito.dump.academy/products').then(items => {
      const array = JSON.parse(items).data;
      this.setState({ data: array })
    })
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid container-fluid align-items-center" >
        <div className="container">
          <div className="row">
            <div class="col-sm-12 col-lg-6">
              <h1 className="display-4">This is Avito task</h1>
            </div>
            <div class="col-sm-12 col-lg-6">
              <div className="btn-toolbar">
                <div className="btn-group mr-3 sort-buttons"><SortButtons /></div>
                <div className="btn-group filter-buttons"><FilterButtons /></div>
              </div>
            </div>
          </div>
          <Block data={this.state.data} />
        </div>
      </div>
    )
  }
}
