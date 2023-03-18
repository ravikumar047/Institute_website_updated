import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaUniversity } from 'react-icons/fa';
import { TfiBasketball } from 'react-icons/tfi';
import { TbBulb , TbRocket, TbMicroscope} from 'react-icons/tb';
import { VscCircuitBoard} from 'react-icons/vsc';
import "./cards.css"


import { IconContext } from "react-icons";


function Cards() {
  return (
    <div style={{margin: "150px", marginTop: "50px"}}>
    <Row xs={2} md={6} className="g-4" style={{display: "flex", justifyContent: "space-between", margin: "auto"}}>
          <Card style={{ width: '20rem' , paddingTop: "2rem"}}>
            <IconContext.Provider value={{ color: "#001A38", className: "global-class-name" , size: "100px"}}>
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <FaUniversity />
              </div>
            </IconContext.Provider>
            <Card.Body>
              <Card.Title style={{textAlign: "center"}}>Student Campus Life</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem', textAlign: "center", paddingTop: "2rem"}}>
            <IconContext.Provider value={{ color: "#001A38", className: "global-class-name" , size: "100px"}}>
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
               <TfiBasketball/>
              </div>
            </IconContext.Provider>
            <Card.Body>
              <Card.Title style={{textAlign: "center"}}>DEW 2020</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' , paddingTop: "2rem"}}>
            <IconContext.Provider value={{ color: "#001A38", className: "global-class-name" , size: "100px"}}>
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <TbBulb />
              </div>
            </IconContext.Provider>
            <Card.Body>
              <Card.Title style={{textAlign: "center"}}>Institite Innovation Council (IIC)</Card.Title>
            </Card.Body>
          </Card>
    </Row>

    <Row xs={2} md={6} className="g-4" style={{display: "flex", justifyContent: "space-between", margin: "auto"}}>
    <Card style={{ width: '20rem' , paddingTop: "2rem"}}>
            <IconContext.Provider value={{ color: "#001A38", className: "global-class-name" , size: "100px"}}>
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <TbRocket />
              </div>
            </IconContext.Provider>
            <Card.Body>
              <Card.Title style={{textAlign: "center"}}>Startup India</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem', textAlign: "center",  paddingTop: "2rem"}}>
            <IconContext.Provider value={{ color: "#001A38", className: "global-class-name" , size: "100px"}}>
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <VscCircuitBoard />
              </div>
            </IconContext.Provider>
            <Card.Body>
              <Card.Title style={{textAlign: "center"}}>Electronics and ICT Academy</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' ,  textAlign: "center", paddingTop: "2rem"}}>
            <IconContext.Provider value={{ color: "#001A38", className: "global-class-name" , size: "100px"}}>
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <TbMicroscope />
              </div>
            </IconContext.Provider>
            <Card.Body>
              <Card.Title style={{textAlign: "center"}}>Research</Card.Title>
            </Card.Body>
          </Card>
    </Row>
    </div>
  );
}

export default Cards;