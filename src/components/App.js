import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import './../css/App.css';
import Nav from './Nav';
import Footer from './Footer';
import LocationUrl from '../router/LocationUrl';

class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Nav />
        <LocationUrl />
        <Footer />
      </div>
    </Router>
    );
  }
}



export default App;
