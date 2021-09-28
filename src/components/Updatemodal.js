import React, { Component } from "react";
import { Button, Form, Modal } from "react-bootstrap";

class updatemodal extends Component {
  render() {
    return (
      <div>
        <Modal.Dialog show={this.props.show}>
          <Modal.Header closeButton >
            <Modal.Title>update your favarite fruites</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onsubmit={this.props.updatefavar}>
            <Form.Label>name</Form.Label>
              <Form.Control size="lg" type="text" placeholder="name" defaultValue={this.props.favaritdata.name} />
              <br />
              <Form.Label>image</Form.Label>
              <Form.Control type="text" placeholder="image"   defaultValue={this.props.favaritdata.image}/>
              <br />
              <Form.Label>price</Form.Label>
              <Form.Control size="sm" type="text" placeholder="price"   defaultValue={this.props.favaritdata.price}/>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handler}>Close</Button>
            
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

export default updatemodal;
