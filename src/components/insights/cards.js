import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Insightcard from './insightcard';
import { FaUniversity } from 'react-icons/fa';
import { TfiBasketball } from 'react-icons/tfi';
import { TbBulb , TbRocket, TbMicroscope} from 'react-icons/tb';
import { VscCircuitBoard} from 'react-icons/vsc';
import "./cards.css"

function Cards() {
  return (
    <div style={{margin: "15%", marginTop: "50px"}}>
      <Row xs={2} md={6} className="g-4" style={{display: "flex", justifyContent: "space-between", margin: "auto"}}>
        <Insightcard icon=<FaUniversity/> Title={"Student Campus life"}/>
        <Insightcard icon=<TfiBasketball/> Title={"DEW 2020"}/>
        <Insightcard icon=<TbBulb /> Title={"Institite Innovation Council (IIC)"}/>
      </Row>

      <Row xs={2} md={6} className="g-4" style={{display: "flex", justifyContent: "space-between", margin: "auto"}}>
        <Insightcard icon= <TbRocket /> Title={"Startup India"}/>
        <Insightcard icon= <VscCircuitBoard /> Title={"Electronics and ICT Academy"}/>
        <Insightcard icon= <TbMicroscope /> Title={"Research"}/>
      </Row>
    </div>
  );
}

export default Cards;