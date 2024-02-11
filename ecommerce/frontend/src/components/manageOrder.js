import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import axios from 'axios';
import First from '../images/pic5.jpg';

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + localStorage.getItem('token'),
    },
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getAllOrders', config);
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <h1>Admin Cart</h1>
      <CardGroup className='container mt-1'>
      {orders.map((order) => (
        <Card key={order._id} style={{ width: '25rem' }}>
          <Card.Img variant="top" src={First} />
          <Card.Body>
            <Card.Title>{`Order ID: ${order.product}`}</Card.Title>
            <Card.Text>{`Product Name : ${order.products}`} </Card.Text>
            <Card.Text>{`Order Amount : ${order.price}`} </Card.Text>
            <Card.Text>{`Order Address: ${order.address}`} </Card.Text>

          </Card.Body>
        </Card>
      ))}
      </CardGroup>
    </>
  )
};

export default ManageOrder;
