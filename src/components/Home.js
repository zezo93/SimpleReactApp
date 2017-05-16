import React from "react";
import { Jumbotron, Button, Modal,OverlayTrigger } from 'react-bootstrap';

export class Home extends React.Component{
   constructor(){
       super();
       this.state = {showModal: false};
   }

   close = () => {
     this.setState({ showModal: false });
   }

   open = () => {
     this.setState({ showModal: true });
   }

    render(){
      return(
        <div className="container">
    <Jumbotron>
    <h1>Hello, world!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur tempor dapibus.
        Aenean rhoncus lectus ullamcorper, efficitur neque eget, lacinia magna. Mauris gravida sapien sit amet erat ornare cursus.
        Aliquam in congue augue. Proin volutpat tincidunt rhoncus. Nulla interdum urna vel magna maximus, vel viverra ipsum faucibus.
        Morbi imperdiet aliquam lectus non consectetur. Quisque cursus volutpat ipsum, et aliquet dui sodales quis. Aenean vel nunc maximus,
        lobortis ante non, condimentum odio. Mauris luctus nibh eros, vitae fringilla enim sagittis sed.</p>
        <p><Button bsStyle="primary" bsSize="large" onClick={this.open}>Launch demo modal</Button></p>
    </Jumbotron>
    <Modal show={this.state.showModal} onHide={this.close}>
     <Modal.Header closeButton>
       <Modal.Title>Modal heading</Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <h4>Overflowing text to show scroll behavior</h4>
       <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
       <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
       <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
       <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
       <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
       <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
     </Modal.Body>
     <Modal.Footer>
       <Button onClick={this.close}>Close</Button>
     </Modal.Footer>
   </Modal>
   </div>
      );
    }
}
