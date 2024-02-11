import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark d-flex text-white justify-content-center">
    <div className="p-2 m-0 container">
      <div className="container">
        <div className="row text-center ">
          <div className="col-sm">
              <h1>Company</h1>
              <p>Home</p>
              <p>Shop</p>
              <p>About us</p>
              <p>Contact</p>
              <p>Dresses</p>
              <p>shoes</p>
          </div>
          <div className="col-sm">
            <h1>Contact</h1>
            <h5>Follows us on Social Media</h5>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>Youtube</p>
            <p>Whatup</p>
            <p>E-mail</p>
          </div>
          <div className="col-sm">
            <h1>Categories</h1>
            <p>Men</p>
            <p>Women</p>
            <p>children</p>
            <p>Kids</p>
          </div>
          <div className="col-sm">
            <h1>About us</h1>
            <p>We are dedicated to providing the finest quality products to our customers. With over 20 years of experience in the footwear industry, we take pride in our craftsmanship and commitment to style and comfort. Our mission is to help you put your best foot forward, no matter where life takes you.</p>
          </div>
        </div>
        <div className="text-center p-4 d-flex justify-content-around">
            <p>© 2020 Copyright: MDBootstrap.com</p>
            <div>
              <a href="/home" className="text-white px-2"> 
              <i className="fa fa-home"></i>
              </a>
              <i className="fa-brands fa-facebook px-1"></i>
              <i className="fa-brands fa-instagram px-1"></i>
              <i className="fa-brands fa-twitter px-1"></i>
            </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer;