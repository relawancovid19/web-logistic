import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardHeader,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class header extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader style={{textAlign:"center"}}>
            <h1>Dashboard pengajuan logistik</h1>
          </CardHeader>
        </Card>
      </div>
    );
  }
}

export default header;
