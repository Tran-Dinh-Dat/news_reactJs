import React, { Component } from 'react';
import NewsData from './../data/NewsData.json';
import NewsRelated from './NewsRelated.js';
class Post extends Component {
    render() {
        let idPost = this.props.match.params.id;
        console.log(idPost);

        // console.log("Độ dài của mảng NewsData: " + NewsData.length);
        return (
            <div>
                {
                    NewsData.map((value, key) => {
                        if (value.id == idPost) {
                            return (
                                <div key={key}>
                                    {/* Page Header */}
                                    <header className="masthead" style={{ backgroundImage: 'url("./../img/post-bg.jpg")' }}>
                                        <div className="overlay" />
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-8 col-md-10 mx-auto">
                                                    <div className="post-heading">
                                                        <h1>{value.title}</h1>
                                                        <h2 className="subheading">{value.describe}</h2>
                                                        <span className="meta">Posted by
                                                        <a href="#">Start Bootstrap</a>
                                                            on August 24, 2019</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </header>
                                    {/* Post Content */}
                                    <article>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-8 col-md-10 mx-auto">
                                                    <p>{value.content}</p>
                                                    <a href="#">
                                                        <img width="100%" className="img-fluid" src={value.image} alt="" />
                                                    </a>
                                                    <span className="caption text-muted">{value.title}</span>

                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <hr />
                                    {/* Phần tin liên quan */}
                                    <div className="container">
                                        <div className="row text-center">
                                            <div className="col-md-12">
                                                <h3 >Related News</h3>
                                            </div>
                                        </div>
                                        <div className="row text-center">
                                            {
                                               
                                                // cắt lấy 4 phần tử của đầu đầu của mảng NewsData
                                                NewsData.slice(0, 5).map((value, key) => {
                                                    if (value.id != idPost) {
                                                        return (
                                                            <NewsRelated key={key} describe={value.describe} title={value.title} imgUrl={value.image} postId={value.id} content={value.content}/>
                                                        )
                                                    }
                                                    
                                                })
                                            }

                                        </div>
                                    </div>

                                </div>
                            )
                        }
                    })
                }

            </div>


        );
    }
}

export default Post;