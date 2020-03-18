import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import {
  withRouter
} from "react-router-dom";
import { connect } from "react-redux";
import Header from './header'
import Body from './body'
class test extends Component {
    render() {
        return (
            <div>
            <Container fluid>
                <Row>
                    <Col md="12" style={{padding:"0px"}}><Header /></Col>
                </Row>
                <Row>
                    <Col md="12" style={{padding:"0px"}}><Button color="primary" block onClick={()=>{this.props.history.push({pathname: "/pengajuan"});}}>Buat Pengajuan</Button></Col>
                </Row>
                <Row>
                    <Col md="12" style={{padding:"0px"}}><Body /></Col>
                </Row>
            </Container>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        prmLoading: state.reducer.prmLoading
    };
  };
  
export default connect(mapStateToProps)(withRouter(test));