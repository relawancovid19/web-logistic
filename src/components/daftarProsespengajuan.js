import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

class daftarProsespengajuan extends Component {
  render() {
    return (
      <Card style={{ width: "100%" }}>
        <CardHeader>
          <h1>daftar pengiriman</h1>
        </CardHeader>
        <CardBody style={{padding:"0px",minHeight:"50vh",overflowX:"hidden",overflowY:"scroll"}}>
          <ListGroup>
            <ListGroupItem>
              <ListGroupItemHeading>
                List group item heading
              </ListGroupItemHeading>
              <ListGroupItemText>
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </ListGroupItemText>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    );
  }
}

export default daftarProsespengajuan;
