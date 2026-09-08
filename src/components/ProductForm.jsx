import React, { useState } from 'react'

const ProductForm = ({ setShowForm }) => {

    const [formData, setFormDat] = useState({
        name: "",
        price: "",
        category: "",
        image: ""
    })

    const handleChage = (e) => {
        setFormDat([
            ...formData,
            [e.target.name] : e.target.value
        ])
    }
    return (
        <div>
            <form action="">
                <label htmlFor="name">Enter Product Name : </label>
                <input
                    type="text"
                    id='name'
                    name='name'
                    placeholder='product name'
                    // onChange={handleChage}
                    // value={name}
                /> <br />
                <label htmlFor="price">Enter Product Price : </label>
                <input
                    type="number"
                    id='price'
                    name='price'
                    placeholder='product price'
                    // onChange={handleChage}
                    // value={price}
                /> <br />
                <label htmlFor="category">Enter Product Category : </label>
                <input
                    type="text"
                    id='category'
                    name='category'
                    placeholder='product category'
                    // onChange={handleChage}
                    // value={category}
                /> <br />
                <label htmlFor="image">Enter Product Image URL : </label>
                <input
                    type="text"
                    id='image'
                    name='image'
                    placeholder='product image'
                    // onChange={handleChage}
                    // value={image}
                /> <br />

                <button>Submit</button>

                <button onClick={() => setShowForm(false)}>Cancel</button>
            </form>
        </div>
    )
}

export default ProductForm
