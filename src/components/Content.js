import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PostItem from './PostItem.js';
import NewsData from './../data/NewsData.json';
class Content extends Component {
  
    render() {
        return (
            <div>
                {/* Page Header */}
                <header className="masthead" style={{ backgroundImage: 'url("img/home-bg.jpg")' }}>
                    <div className="overlay" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <div className="site-heading">
                                    <h1>Clean Blog</h1>
                                    <span className="subheading">A Blog Theme by Start Bootstrap</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Main Content */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            {
                                NewsData.map((value, key) => (
                                    <PostItem key={key} describe={value.describe} title={value.title} imgUrl={value.image} postId={value.id} content={value.content}></PostItem>
                                ))
                            }
                            {/* Pager */}
                            <div className="clearfix">
                                <a className="btn btn-primary float-right" href="#">Older Posts →</a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default Content;