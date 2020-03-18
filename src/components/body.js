import React, { Component } from "react";
import {
  Container,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import Daftarpengajuan from "./daftarPengajuan";
import Daftarpengajuanonproses from "./daftarProsespengajuan";

class body extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col lg="6" style={{padding:"20px"}}>
            <Daftarpengajuan />
          </Col>
          <Col lg="6" style={{padding:"20px"}}>
            <Daftarpengajuanonproses />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default body;
