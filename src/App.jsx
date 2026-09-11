import { useState } from 'react'
import './App.css'
import products from './data/products'
import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm'

function App() {

  //usestates
  const [productList, setProductList] = useState(products)
  const [showForm, setShowForm] = useState(false)


  // add product
  const addProduct = (newProduct) => {

    const productWithId = {
      ...newProduct,
      id: productList.length + 1,
    }

    setProductList([...productList, productWithId])

    setShowForm(false)
  }


  //ui
  return (
    <>

      <h2>Product Managment Application</h2>

      {/* button to open form */}
      <button onClick={() => setShowForm(true)}>Add Product</button>

      {showForm && (<ProductForm setShowForm={setShowForm} addProduct={addProduct} />)
      }
      {/* product list */}
      <ProductList productList={productList} />

    </>
  )
}

export default App
