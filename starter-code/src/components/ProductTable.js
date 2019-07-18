import React from 'react'
import ProductRow from './ProductRow'

const ProductTable = (props) => {
  const filteredProducts = props.data.filter((e) => {
    if (props.stocked) {
      return e.name.toLowerCase().includes(props.name.toLowerCase()) && e.stocked === true;
    }
    return e.name.toLowerCase().includes(props.name.toLowerCase());
  })
  
  const productList = filteredProducts.map((prod, idx) => {
    return <ProductRow productKey={idx} name={prod.name} price={prod.price} />
  });

    return (
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          <tr>
            {productList}
          </tr>
        </table>
      </div>
    )
  }


export default ProductTable
