import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Cardsfav';
import axios from 'axios';
import updatemodal from './Updatemodal';
class FavFruit extends React.Component {
  constructor(props){
    super(props);
    this.state={
      show:false,
      favaritdata=[],
      fid:""
    }
  }

  componentDidMount =async()=> {
    let receve =await axios.get(`${process.env.REACT_APP_SERVER_URL}/getapidata`);
    await this.setState({
      favaritdata:receve.data
    });

    
    deletedfav =async (itemid)=> {
      let datadelete =await axios.delete(`${process.env.REACT_}/deletedfav/${itemid}`);
      await this.setState({
        favaritdata:datadelete.data
          })
    }
  }


  handler =async()=> {
await this.setState({
  show:!this.state.show,
})

  }

getfavdata =async(itemid)=> {
  fid:itemid
}

updatedfav =async (e)=>{
  e.preventDefault();
  let updatefavar ={name:e.target.value, 
    image:e.target.value, 
    price:e.target.value,
  }
  let updatefavar = await axios.put(`${process.env.REACT_}/updatedfav/${this.state.fid}`)
  await this.setState({
    favaritdata :updatefavar.data
  
  })
  
  
  }



  render() {
    return(
      <>
        <h1>My Favorite Fruits</h1>
<Card  getfavdata={this.getfavdata} handler={this.handler} deletedfav={this.deleted} favaritdata={this.favaritdata}/>
<Updatemodal updatedfav={this.updatedf} favaritdata={this.favdata} handler={this.handler} show={this.show}/> 

      </>
    )
  }
}

export default FavFruit;
