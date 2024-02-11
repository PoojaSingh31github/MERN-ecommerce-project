import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import axios from 'axios';
import {Navigate} from "react-router-dom";


const ManageProduct = () => {
  const [image, setimage] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [category, setcategory] = useState('');
  const [rating, setrating] = useState(0);
  const [comments, setComments] = useState([]);
  const [allproducts, setallproducts] = useState([]);
  const [alladdproducts, setalladdproducts] = useState({
    name: '',
    price: 0,
    quantity: 0,
    category: '',
    image: '',
    rating: 0,
    comments: [],
  });

  const [editProduct, setEditProduct] = useState(null);
  const [loading, setloading] = useState(false);

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + localStorage.getItem('token'),
    },
  };

  const handleImageupload = async () => {
    try {
      const formdata = new FormData()
      formdata.append('file', image)
      //  console.log(formdata)
      const response = await axios.post("http://localhost:4000/uploadFile", formdata)
      // console.log(formdata)
      return response;
      setloading(false)
    }
    catch (err) {
      console.log(err)
      setloading(false)
    }
  }

  const addProduct = async (e) => {
    try {
      e.preventDefault()
      setloading(true)
      const ImageRes = await handleImageupload();
      console.log(ImageRes);
      const resp = await axios.post('http://localhost:4000/addProduct',
        {
          name: name,
          price: price,
          quantity: quantity,
          category: category,
          image: `http://localhost:4000/files/${ImageRes.data.fileName}`,
          rating: rating,
          comments: comments
        }, config);
      getAllProducts();
      setloading(false);

    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };



  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:4000/deleteProductById/${productId}`, config);
      getAllProducts();
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  const getAllProducts = async () => {
    try {
      const GetProducts = await axios.get('http://localhost:4000/getAllproducts');
      setallproducts(GetProducts.data);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };



  useEffect(() => {
    getAllProducts();
  }, []);

  const handleEditClick = (product) => {
    setEditProduct(product);
    setalladdproducts({
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      category: product.category,
      image: product.image,
      rating: product.rating,
      comments: product.comments,
    });

  };

  const handleCancelEdit = () => {

    setEditProduct(null);
    setalladdproducts({
      name: '',
      price: 0,
      quantity: 0,
      category: '',
      image: '',
      rating: 0,
      comments: [],
    });
  };

  // const EditPage = (productId) => {
  //   navigate(`/editProduct/${productId}`);
  // }

  return (
    <Container className="m-5">
      <div>
        {/* Display the list of products */}
        <CardGroup className='container ProductCard'>
          {allproducts &&
            allproducts.map((product, index) => (
              <div key={index} className='col-lg-4 col-md-4 col-sm-6'>
                <Card className='card'>
                  <Card.Img className='card-img' variant='top' src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Card.Title>${product.price}</Card.Title>
                    <Navigate to={`/editProduct/${product._id}`} >
                      <Button className='btn btn-success m-1' >
                        Edit
                      </Button>
                    </Navigate>
                    <Button className='btn btn-danger m-1' onClick={() => deleteProduct(product._id)}>
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
        </CardGroup>

      </div>
    </Container>
  );
};

export default ManageProduct;
