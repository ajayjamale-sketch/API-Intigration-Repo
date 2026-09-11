import React, { useState } from 'react'

const ProductForm = ({ setShowForm, addProduct }) => {

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        category: "",
        image: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        const newProduct = {
            name : formData.name,
            price : formData.price,
            category : formData.category,
            image : formData.image
        }

        addProduct(newProduct)

        setFormData({
            name:"",
            price : "",
            category : "",
            image : "",
        })

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Enter Product Name : </label>
                <input
                    type="text"
                    id='name'
                    name='name'
                    placeholder='product name'
                    value={formData.name}
                    onChange={handleChange}
                /> <br />
                <label htmlFor="price">Enter Product Price : </label>
                <input
                    type="number"
                    id='price'
                    name='price'
                    placeholder='product price'
                    value={formData.price}
                    onChange={handleChange}
                /> <br />
                <label htmlFor="category">Enter Product Category : </label>
                <input
                    type="text"
                    id='category'
                    name='category'
                    placeholder='product category'
                    value={formData.category}
                    onChange={handleChange}
                /> <br />
                <label htmlFor="image">Enter Product Image URL : </label>
                <input
                    type="text"
                    id='image'
                    name='image'
                    placeholder='product image'
                    value={formData.image}
                    onChange={handleChange}
                /> <br />

                <button type='submit'>Submit</button>

                <button onClick={() => setShowForm(false)}>Cancel</button>
            </form>
        </div>
    )
}

export default ProductForm
