import { useState } from 'react'
import './App.css'
import products from './data/products'
import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm'

function App() {

  //usestates
  const [productList, setProductList] = useState(products)
  const [showForm, setShowForm] = useState(false)
  const [editProduct,setEditProduct] = useState(null)


  // add product
  const addProduct = (newProduct) => {

    const productWithId = {
      ...newProduct,
      id: productList.length + 1,
    }

    setProductList([...productList, productWithId])

    setShowForm(false)
  }

  //delete product
  const deleteProduct = (id) => {
      const newList = productList.filter((product) => product.id !== id)
      setProductList(newList)
  }

  //update Product
  const updateProduct = (updatedProduct) => {
  const newList = productList.map((product) => {
    if (product.id === updatedProduct.id) {
      return updatedProduct;
    } else {
      return product;
    }
  });

  setProductList(newList);
  setEditProduct(null);
  setShowForm(false);
};
  //ui
  return (
    <>

      <h2>Product Managment Application</h2>

      {/* button to open form */}
      <button onClick={() => setShowForm(true)}>Add Product</button>

      {showForm && (
        <ProductForm 
          setShowForm={setShowForm} 
          addProduct={addProduct} 
          editProduct={editProduct}
          updateProduct={updateProduct}
        />)
      }

      {/* product list */}
      <ProductList 
        productList={productList} 
        deleteProduct={deleteProduct}
        setEditProduct={setEditProduct}
        setShowForm={setShowForm}
      />

    </>
  )
}

export default App
