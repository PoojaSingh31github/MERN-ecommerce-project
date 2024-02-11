// imported react-bootstrap 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
function Header({products}) {
  
  return (
    // here i used fragment tag in wjich enclose all the code 
    <div>
      <Navbar className="bg-body-tertiary justify-content-between" style={{ maxHeight: '50px', overflow: 'hidden' }}>
        <Form inline>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form>
        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Search</Button>
            </Col>
          </Row>
        </Form>
      </Navbar>
      {/* i used two navbar one for sreaching purpose and one for all links  */}
          <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/product">
          E-commerce
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">All Products</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/category" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                All Category
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/">All</NavLink></li>
                <li><NavLink className="dropdown-item" to="/">Dresses</NavLink></li>
                <li><NavLink className="dropdown-item" to="/">Pants</NavLink></li>
                <li><NavLink className="dropdown-item" to="/">Suits</NavLink></li>
                {/* <li><NavLink className="dropdown-item" onClick={filterProducts}>Electronic</NavLink></li> */}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/profile" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Profile
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/profile">User</NavLink></li>
                <li><NavLink className="dropdown-item" to="/admin">Admin</NavLink></li>
                
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">Sign-up</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart"> <FontAwesomeIcon className="cart" icon={faCartShopping}/> Cart</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Header;
