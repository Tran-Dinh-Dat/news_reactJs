import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Post from '../components/Post';
import Content from '../components/Content';
import About from '../components/About';
import Contact from '../components/Contact';

class LocationUrl extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Content} />
                <Route path="/about" component={About} />
                <Route path="/post/:slug.:id.html" component={Post} />
                <Route path="/contact" component={Contact} />
            </div>
        );
    }
}

export default LocationUrl;