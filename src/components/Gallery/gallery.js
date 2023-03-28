import React from 'react'
import image1 from '../../Assets/image1.1.png'
import image2 from '../../Assets/image 1.png'
import image3 from '../../Assets/image 4.png'
import image4 from '../../Assets/image 2.png'
import image5 from '../../Assets/image 5.png'
import image6 from '../../Assets/image 3.png'
import { Button } from 'react-bootstrap'
import './gallery.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Gallery = () => {
  return (
    // <div className='row'>
    //   <div
    //     style={{
    //       fontSize: "36px",
    //       fontWeight: "600",
    //       textAlign: "center",
    //       color: "white",
    //       objectFit:"contain"
    //     }}>A glimpse of institute’s activities</div>
    //   <div className='column'>
    //     <img src={image1} alt='img1' />
    //     <img src={image2} alt='img2' />
    //     <img src={image3} alt='img3' />
    //   </div>
    //   <div className='column'>
    //     <img src={image4} alt='img4' />
    //     <img src={image5} alt='img5' />
    //     <img src={image6} alt='img6' />
    //   </div>
    //   <div style={{ textAlign: "center" }}>
    //     <button>View Gallery</button>
    //   </div>
    // </div>
    <div className='mb-3' style={{ background: "#013571" }}>
      <center className='gallery-title my-4 pt-4'> A glimpse of institute’s activities </center>
    <Container fluid style={{minWidth: "-webkit-fill-available"}}>
    <Row className="justify-content-md-center">
      <Col style={{maxWidth:"min-content",padding:"0"}}><img src={image1} alt='img1' /></Col>
      <Col xs={6} style={{maxWidth:"min-content",padding:"0"}}><img src={image2} alt='img2' /></Col>
      <Col style={{maxWidth:"min-content",padding:"0"}}><img src={image3} alt='img3' /></Col>
    </Row>
    <Row className="justify-content-md-center">
      <Col style={{maxWidth:"min-content",padding:"0"}}><img src={image4} alt='img4' /></Col>
      <Col style={{maxWidth:"min-content",padding:"0"}} xs={5}><img src={image5} alt='img5' /></Col>
      <Col style={{maxWidth:"min-content",padding:"0"}}><img src={image6} alt='img6' /></Col>
        </Row>
        
      </Container>
      <center><button className='gallery-button mt-3 mb-3'>Visit Gallery</button></center>
  </div>
  )
}

export default Gallery