import React, { Component } from 'react'
import SearchBar from './SearchBar'
import data from '../data.json'

export class FilterableProductTable extends Component {
  state = {
    data: data.data
  }



  render() {


    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar data={this.state.data}/>
      </div>
    )
  }
}

export default FilterableProductTable
