import React from 'react'

const ProductList = ({productList}) => {
  return (
    <div className='product-list'>
      {productList.map((product) => (
            <div className='product-card' key={product.id}>
                <img src={product.image} alt={product.name} />

                <div className='product-info'>
                    <h2 className='product-name'>{product.name}</h2>
                    <h2 className='product-price'>${product.price}</h2>
                    <p className='product-category'>{product.category}</p>
                </div>
            </div>
      ))}
    </div>
  )
}

export default ProductList
