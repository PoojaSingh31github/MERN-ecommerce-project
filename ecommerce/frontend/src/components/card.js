import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function Cards() {
  const [allproducts, setallproducts] = useState([]);

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + localStorage.getItem('token'),
    },
  };

  const addToCart = async (productId) => {
    try {
      const response = await axios.post(`http://localhost:4000/addToCart/${productId}`, {}, config);
      console.log(response.data);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const getAllproducts = async () => {
    try {
      const GetProducts = await axios.get('http://localhost:4000/getAllproducts');
      setallproducts(GetProducts.data);
      console.log(GetProducts)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllproducts();
  }, []);

  return (
    <>
      <CardGroup className='container mt-1 ProductCard'>
        {allproducts &&
          allproducts.map((product, index) => (
            <div key={index} className='col-lg-4 col-md-4 col-sm-6'>
              <Card className='card'>
                <Card.Img className='card-img' variant='top' src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <Card.Title>${product.price}</Card.Title>
                  <Button className='btn btn-primary ' variant='primary' onClick={() => addToCart(product._id)}>
                    <FontAwesomeIcon className='cart' icon={faCartShopping} /> Add to cart
                  </Button>

                </Card.Body>
              </Card>
            </div>
          ))}
      </CardGroup>
    </>
  );
}

export default Cards;
