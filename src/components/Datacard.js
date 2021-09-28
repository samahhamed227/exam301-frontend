import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

 class Datacard extends Component {
    render() {
        return (
            <div>
 {this.props.apidated.map((item) =>{

return (
<Card  style={{ width: '18rem' }}>
<Card.Img variant="top" src={item.src} />
<Card.Body>
  <Card.Title>{item.name}</Card.Title>
  <Card.Text>
   {item.price}
  </Card.Text>
  <Button variant="primary" onClick={() => this.props.addedfav(item)}>add favorite frouites</Button>
</Card.Body>
</Card>
)
 }  
        )
    }
    </div>
        )
 }
 }
export default Datacard;
