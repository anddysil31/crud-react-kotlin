import React,{ Component } from "react";
import {Link} from 'react-router-dom'
import {Button, Container} from 'reactstrap'
class Home extends Component{
    render(){
        return(
            <div className="app">
                {this.props.navbar}
                <Container fluid>
                    <div>
                        <Button color="secondary">
                            <Link className= "app-link" to="api/animal">Lista de Insectos</Link>
                        </Button>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Home