import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import "font-awesome/css/font-awesome.min.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class tambahPengajuan extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        prmModal: false
    };
  }
  render() {
    return (
      <div>
        <Modal isOpen={this.state.prmModal} size='xl'>
            <ModalBody>
                <Row>
                    <Col sm='12'>
                        <FormGroup>
                            <Label for="exampleSelect">jenis komponen</Label>
                            <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm='12'>
                        <FormGroup>
                            <Label for="exampleEmail">nama komponen medis</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm='12'>
                        <FormGroup>
                            <Label for="exampleEmail">spesifikasi</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm='12'>
                        <FormGroup>
                            <Label for="exampleEmail">jumlah</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="with a placeholder"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm='12'>
                        <FormGroup>
                            <Label for="exampleEmail">satuan</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="with a placeholder"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm='12'>
                        <FormGroup>
                            <Label for="exampleEmail">tujuan penggunaan</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm='12'>
                        <FormGroup>
                            <Label for="exampleSelect">tingkat urgensi</Label>
                            <Input type="select" name="select" id="exampleSelect">
                            <option>Rendah</option>
                            <option>Menengah</option>
                            <option>Tinggi</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm='12'>
                        <FormGroup>
                            <Label for="exampleEmail">tautan referensi komponen</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="with a placeholder"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm='12'>
                        <FormGroup>
                            <Label for="exampleFile">gambar</Label>
                            <Input type="file" name="file" id="exampleFile" />
                            <FormText color="muted">
                            Pilih file gambar.
                            </FormText>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm='4' style={{padding:"20px"}}>
                        <Button 
                            color="primary"
                            onClick={() => {
                                this.setState({ prmModal: false });
                            }}
                            block
                        >
                            Batal
                        </Button>
                    </Col>
                    <Col sm='4' style={{padding:"20px"}}>
                        <Button 
                            color="primary"
                            onClick={() => {
                                this.setState({ prmModal: false });
                            }}
                            block
                        >
                            Batal
                        </Button>
                    </Col>
                    <Col sm='4' style={{padding:"20px"}}>
                        <Button 
                            color="primary"
                            onClick={() => {
                                this.setState({ prmModal: false });
                            }}
                            block
                        >
                            Batal
                        </Button>
                    </Col>
                </Row>
            </ModalBody>
        </Modal>
        <Card style={{ width: "100%" }}>
          <CardHeader>
            <h1>Form pengajuan logistik</h1>
          </CardHeader>
          <CardBody style={{ padding: "20px" }}>
            <Row>
                <Col xs="12">
                    <Row>
                    <Col>
                        <FormGroup>
                            <Label for="exampleEmail">Nama</Label>
                            <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="with a placeholder"
                            />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                        <FormGroup>
                            <Label for="exampleEmail">Instansi</Label>
                            <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="with a placeholder"
                            />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                        <FormGroup>
                            <Label for="exampleEmail">Instansi</Label>
                            <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="with a placeholder"
                            />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                        <FormGroup>
                            <Label for="exampleEmail">No handphone</Label>
                            <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="with a placeholder"
                            />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                        <FormGroup>
                            <Label for="exampleEmail">Alamat</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                    </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                    <Card style={{ width: "100%" }}>
                    <CardHeader>
                        <Row>
                        <Col
                            xs="9"
                            style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center"
                            }}
                        >
                            <h1>list komponen</h1>
                        </Col>
                        <Col
                            xs="3"
                            style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center"
                            }}
                        >
                            <Button color="primary"
                                onClick={() => {
                                    this.setState({ prmModal: true });
                                }}
                            >
                            <i className="fa fa-plus"></i> Tambah
                            </Button>
                        </Col>
                        </Row>
                    </CardHeader>
                    <CardBody
                        style={{
                        padding: "0px",
                        minHeight: "50vh",
                        overflowX: "hidden",
                        overflowY: "scroll"
                        }}
                    >
                        <ListGroup>
                        <ListGroupItem>
                            <ListGroupItemHeading>
                            List group item heading
                            </ListGroupItemHeading>
                            <ListGroupItemText>
                            Donec id elit non mi porta gravida at eget metus.
                            Maecenas sed diam eget risus varius blandit.
                            </ListGroupItemText>
                        </ListGroupItem>
                        </ListGroup>
                    </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
              <Col
                xs="12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px"
                }}
              >
                <Button
                  color="danger"
                  block
                  onClick={() => {
                    this.props.history.push({ pathname: "/" });
                  }}
                >
                  Batal
                </Button>
              </Col>
            </Row>
            <Row>
              <Col
                xs="12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px"
                }}
              >
                <Button
                  color="primary"
                  block
                  onClick={() => {
                    this.props.dispatch({ type: "LOADINGTOGGLE" })
                  }}
                >
                  Proses
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        prmLoading: state.reducer.prmLoading
    };
  };
  
export default connect(mapStateToProps)(withRouter(tambahPengajuan));
