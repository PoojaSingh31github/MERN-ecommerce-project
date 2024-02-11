import Carousel from 'react-bootstrap/Carousel';
import First from '../images/pic1.jpg';
import Second from '../images/pic2.jpg';
import Third from '../images/pic3.jpg'
function Slider() {
  return (
    <Carousel className='mt-2'>
      <Carousel.Item >
        <img src={First} alt='First slide' className='slide-img' />
        <Carousel.Caption>
          <h3>Fill and feel the cart</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Second} alt='Second slide' className='slide-img'/>
        <Carousel.Caption>
          <h3>Happiness in shopping </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Third} alt='Third slide' className='slide-img' />
        <Carousel.Caption>
          <h3>Get new and make new changes</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;