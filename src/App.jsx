import { useState } from 'react'
import './App.css'
import products from './data/products'
import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm'

function App() {
  const [productList,setProductList] = useState(products)
  const [showForm,setShowForm] = useState(false)

  return (
   <>

      <h2>Product Managment Application</h2>

      <button onClick={() => setShowForm(true)}>Add Product</button>
      
      {showForm && (<ProductForm setShowForm={setShowForm}/>)
      }
      <ProductList productList={productList}/>

   </>
  )
}

export default App
