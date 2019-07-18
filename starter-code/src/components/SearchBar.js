import React, { Component } from 'react'
import ProductTable from './ProductTable'

export class SearchBar extends Component {

  state = {
    name: "",
    stocked: false
  }

  handleChange = (e) => {
    const {value} = e.target
    this.setState({
      name: value
    })
    console.log(this.state)
  }

  handleChangeCheckBox = () => {
    this.setState({
      stocked: !this.state.stocked
    })
    console.log(this.state)
  }

  render() {
  
    return (
      <div>
        <label>Search:</label>
        <br/>
        <input type="text" name="name" value={this.state.name} onChange={(e)=> this.handleChange(e)}/>
        <br />
        <input type="checkbox" name="stocked" checked={this.state.stocked} onChange={() => this.handleChangeCheckBox()} /> Only show products in stock
        <ProductTable data={this.props.data} name={this.state.name} stocked={this.state.stocked}/>
      </div>
    )
  }
}

export default SearchBar
