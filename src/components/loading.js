import React from "react";
import { connect } from "react-redux";
// import { Modal} from 'reactstrap';
import { Spinner } from "reactstrap";

class ModalLoading extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.ModalLoading && (
          <div className="overlay">
            <div
              className="centercontent"
              style={{ height: "100%", width: "100%" }}
            >
              <Spinner
                style={{ width: "15rem", height: "15rem" }}
                type="grow"
                color="light"
              />
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ModalLoading: state.loadingReducer.ModalLoading
  };
};

export default connect(mapStateToProps)(ModalLoading);
