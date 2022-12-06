import React, { Component } from 'react';
import {
  Alert,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { CompressedTextureLoader } from 'three';

const Animal = (props) => (
  <div>
    <h3>{props.name}</h3>
        <div>{props.family}</div>
      <Button color="secondary" tag={Link} to={'/api/animal' + props.id}>Edit</Button>
      <Button color="danger" onClick={() => props.remove(props.id)}>Delete</Button>
  </div>
);

class AnimalList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animal: [],
      isLoading: true,
      errorMessage: null,
    };
    this.remove = this.remove.bind(this);

  }

  async componentDidMount() {
    this.setState({isLoading: true});
      const response = await fetch('/api/animal');
      console.log(response)
      const body = await response.json();
      const animal = body._embedded.animal;
      this.setState({
        animal: animal,
        isLoading: false,
        errorMessage:null
      });
    
  }
  


  async remove(id) {
    let response = await this.props.server.delete(id);
    if(!response.ok){
      this.setState({errorMessage: `Failed to delete: ${response.status} ${response.statusText}`})
    }else {
  
    let updatedAnimal = [...this.state.animal].filter(i => i.id !== id);
    this.setState({animal: updatedAnimal, errorMessage: null});
 
  }}

  render() {
    const {animal, isLoading, errorMessage} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        {this.props.navbar}
       
          <h3 className="coffee-shops-title">Animal List</h3>
          <Button color="success" tag={Link} to="animal/new">Crear</Button>
     
      
        <div className="d-flex flex-row flex-container flex-wrap justify-content-center">
          {animal.map(animal =>
            <Animal {...animal} remove={this.remove.bind(this)} key={animal.id}/>
          )}
          {!animal || animal.length === 0 ? <p>No animal</p> : null}
        </div>
      </div>
    );
  }
}

export default AnimalList;