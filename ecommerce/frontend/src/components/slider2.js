import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import First from '../images/pic5.jpg';
import Third from '../images/pic3.jpg';
import Forth from '../images/pic4.jpg';
import Fifth from '../images/pic11.jpg';
import sixth from '../images/pic6.jpg';
import seventh from '../images/pic7.jpg';
import eighth from '../images/pic8.jpg';
import ninth from '../images/pic9.jpg';
import tenth from '../images/pic10.jpg';
import 'animate.css';

const Slider2 = () => {
  
  return (
    <>
    <h2 className='animate__animated animate__bounce wow text-center m-4 text-danger font-design'> Featured products</h2>
    <Carousel interval={null} nextIcon={<span class="text-primary">Next</span>} prevIcon={<span class="text-primary">Prev</span>}>
       <Carousel.Item>
        <div className="d-flex justify-content-around">
          <div className='slider2'>
          <img
            className="d-block slider-image"
            src={First} alt='First slide'
          />
          <div className='text-center'>
            <h3 >$3500</h3>
            <p>Lorem....</p>
            <Button className='btn btn-primary ' variant="primary"> <FontAwesomeIcon className="cart" icon={faCartShopping} /> Add to cart</Button>
          </div>
          </div>
          <div className='slider2'>
          <img
            className="d-block slider-image"
            src={sixth} alt='Second slide'
          />
        <div className='text-center'>
            <h3 >$4500</h3>
            <p>Lorem....</p>
            <Button className='btn btn-primary ' variant="primary"> <FontAwesomeIcon className="cart" icon={faCartShopping} /> Add to cart</Button>
          </div>
            </div>
            <div className='slider2'>
          <img
            className="d-block slider-image"
            src={Third} alt='Third slide'
          />
          <div className='text-center'>
            <h3 >$3900</h3>
            <p>Lorem....</p>
            <Button className='btn btn-primary ' variant="primary"><FontAwesomeIcon className="cart" icon={faCartShopping} /> Add to cart</Button>
          </div>
            </div>
            <div className='slider2'>
          <img
            className="d-block slider-image"
            src={Forth} alt='Third slide'
          />
          <div className='text-center'>
            <h3 >$3600</h3>
            <p>Lorem....</p>
            <Button className='btn btn-primary ' variant="primary"> <FontAwesomeIcon className="cart" icon={faCartShopping} /> Add to cart</Button>
          </div>
            </div>
            <div className='slider2'>
          <img
            className="d-block slider-image"
            src={Fifth} alt='Third slide'
          />
          <div className='text-center'>
            <h3 >$8600</h3>
            <p>Lorem....</p>
            <Button className='btn btn-primary ' variant="primary"> <FontAwesomeIcon className="cart" icon={faCartShopping} /> Add to cart</Button>
          </div>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-around">
          <div className='slider2'>
          <img
            className="d-block slider-image"
            src={First} alt='First slide'
          />
          <div className='text-center'>
            <h3 >$3500</h3>
            <p>Lorem....</p>
            <Button className='btn btn-primary ' variant="primary"><FontAwesomeIcon className="cart" icon={faCartShopping} />  Add to cart</Button>
          </div>
          </div>
          <div className='slider2'>
          <img
            className="d-block slider-image"
            src={sixth} alt='Second slide'
          />
        <div className='text-center'>
            <h3 >$4500</h3>
            <p>Lorem....</p>
            <Button className='btn btn-primary ' variant="primary"><FontAwesomeIcon className="cart" icon={faCartShopping} />  Add to cart</Button>
          </div>
            </div>
            <div className='slider2'>
          <img
            className="d-block slider-image"
            src={Third} alt='Third slide'
          />
          <div className='text-center'>
            <h3 >$3900</h3>
            <p>Lorem....</p>
            <Button className='btn btn-primary ' variant="primary"><FontAwesomeIcon className="cart" icon={faCartShopping} />  Add to cart</Button>
          </div>
            </div>
            <div className='slider2'>
          <img
            className="d-block slider-image"
            src={Fifth} alt='Third slide'
          />
          <div className='text-center'>
            <h3 >$3600</h3>
            <p>Lorem....</p>
            <Button className='btn btn-primary ' variant="primary"><FontAwesomeIcon className="cart" icon={faCartShopping} />  Add to cart</Button>
          </div>
            </div>
            <div className='slider2'>
          <img
            className="d-block slider-image"
            src={tenth} alt='Third slide'
          />
          <div className='text-center'>
            <h3 >$8600</h3>
            <p>Lorem....</p>
            <Button className='btn btn-primary ' variant="primary"><FontAwesomeIcon className="cart" icon={faCartShopping} />  Add to cart</Button>
          </div>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-around">
          <div className='slider2'>
          <img
            className="d-block slider-image"
            src={seventh} alt='First slide'
          />
          <div className='text-center'>
            <h3 >$3500</h3>
            <p>Lorem....</p>
            <Button className='btn btn-primary ' variant="primary"><FontAwesomeIcon className="cart" icon={faCartShopping} />  Add to cart</Button>
          </div>
          </div>
          <div className='slider2'>
          <img
            className="d-block slider-image"
            src={eighth} alt='Second slide'
          />
        <div className='text-center'>
            <h3 >$4500</h3>
            <p>Lorem....</p>
            <Button className='btn btn-primary ' variant="primary"><FontAwesomeIcon className="cart" icon={faCartShopping} />  Add to cart</Button>
          </div>
            </div>
            <div className='slider2'>
          <img
            className="d-block slider-image"
            src={ninth} alt='Third slide'
          />
          <div className='text-center'>
            <h3 >$3900</h3>
            <p>Lorem....</p>
            <Button className='btn btn-primary ' variant="primary"><FontAwesomeIcon className="cart" icon={faCartShopping} />  Add to cart</Button>
          </div>
            </div>
            <div className='slider2'>
          <img
            className="d-block slider-image"
            src={tenth} alt='Third slide'
          />
          <div className='text-center'>
            <h3 >$3600</h3>
            <p>Lorem....</p>
            <Button className='btn btn-primary ' variant="primary"><FontAwesomeIcon className="cart" icon={faCartShopping} />  Add to cart</Button>
          </div>
            </div>
            <div className='slider2'>
          <img
            className="d-block slider-image"
            src={First} alt='Third slide'
          />
          <div className='text-center'>
            <h3 >$8600</h3>
            <p>Lorem....</p>
            <Button className='btn btn-primary ' variant="primary"><FontAwesomeIcon className="cart" icon={faCartShopping} />  Add to cart</Button>
          </div>
            </div>
        </div>
      </Carousel.Item>
     
    </Carousel>
    </>
  );
};

export default Slider2;
