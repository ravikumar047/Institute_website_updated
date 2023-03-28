import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaUniversity } from 'react-icons/fa';
import { TfiBasketball } from 'react-icons/tfi';
import { TbBulb , TbRocket, TbMicroscope} from 'react-icons/tb';
import { VscCircuitBoard} from 'react-icons/vsc';
import { IconContext } from "react-icons";
import "./cards.css";

const Insightcard = (props) => {
  return (
    <Card className='cardHover' style={{ width: '20rem' , paddingTop: "2rem"}}>
    <IconContext.Provider value={{ color: "#001A38", className: "global-class-name" , size: "100px"}}>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
       {props.icon}
      </div>
    </IconContext.Provider>
    <Card.Body>
      <Card.Title style={{textAlign: "center"}}>{props.Title}</Card.Title>
    </Card.Body>
  </Card>
  )
}

export default Insightcard