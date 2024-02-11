import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const EditProducts = () => {

    const [image, setimage]= useState('');
    const [name, setName]= useState('');
    const [price, setPrice]= useState(0);
    const [quantity, setQuantity]= useState(0);
    const [category,setcategory]= useState('');
    const [rating, setrating]= useState(0);
    const [comments, setComments]= useState([]);

    const {productId} = useParams();

    const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'bearer ' + localStorage.getItem('token'),
        },
      };

    const updateProduct = async (productId) => {
        try {
          await axios.put(`http://localhost:4000/editProductById/${productId}`,{name:name ,price:price, quantity: quantity, category:category, } ,config);
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <div>
            {/* <h2 className='m-2'>{'Edit Product' : 'Add a New Product'}</h2> */}
            <form action="" className="form">
                <input required="" className="input" type="text" name="name" id="name" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input required="" className="input" type="number" name="price" id="price" placeholder="Product Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                <input required="" className="input" type="number" name="quantity" id="quantity" placeholder="Product quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                <input required="" className="input" type="text" name="category" id="category" placeholder="Product category" value={category} onChange={(e) => setcategory(e.target.value)} />
                <input required='' className='input' type="file" name='file' onChange={(e) => setimage(e.target.files[0])} />
                        <Button className='login-button' onClick={() => updateProduct(productId)}>
                            Update Product
                        </Button>
            </form>
        </div>
    )
}

export default EditProducts;