import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AnimalEdit from './Animal/AnimalEdit';
import AnimalList from './Animal/AnimalList';
import Navegation from './Components/Navbar';
import Server from './Server/Server';

const server = new Server();

// class App extends Component {
//   state = {
//     isLoading: true,
//     animal: []
//   };

//   async componentDidMount() {
//     const response = await fetch('/api/animal');
//     const body = await response.json();
//     this.setState({animal: body._embedded.animal, isLoading: false});
//   }

//   render() {
//     const {animal, isLoading} = this.state;

//     if (isLoading) {
//       return <p>Loading...</p>;
//     }

//     return (
//       <div className="App">
//         <header className="App-header">
//           <div className="App-intro">
//             <h2>Animal List</h2>
//             {animal.map(animal =>
//               <div key={animal.id}>
//                 {animal.name} - {animal.family}
//               </div>
//             )}
//           </div>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
class App extends Component {


  render() {
    const navbar = <Navegation/>;

    return (
      <Router>
        <Switch>
          <Route
            path='/'
            exact={true}
            render={(props) => <Home {...props} server={server} navbar={navbar}/>}
          />
          <Route
            path='/api/animal'
            exact={true}
            render={(props) => <AnimalList {...props} server={server} navbar={navbar}/>}
          />
          <Route
            path='/api/animal/:id'
            render={(props) => <AnimalEdit {...props} server={server} navbar={navbar}/>}
          />
        </Switch>
      </Router>
    )
  }
}

export default App;

