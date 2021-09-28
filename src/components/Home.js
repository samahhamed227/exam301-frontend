import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class Home extends React.Component {
constructor(props) {
  super(props);
  this.state={
  apidated=[],
  }
}

componentDidMount =async()=> {
  let datas =await axios.get(`${process.env.REACT_APP_SERVER_URL}/getapidata`);
  await this.setState({apidated: datas.data});
  
}
addedfav =async(element=>{
  let favFruit={name:element.name,image:element.image,price:element.price}
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/addfav`,favFruit)
})

  render() {
    return (
      <>
        <h1>all data on api </h1>

        <Datacard addedfav={this.addedfav} apidated={this.apidated} />
      </>
    )
  }
}

export default Home;
