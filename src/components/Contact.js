import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
            fImage: ""
        }
    }
    isChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            // gán giá trị state Handling Multiple Inputs
            [name]: value
        });
    }
    isChangeFile = (event) => {
        let fImage = event.target.files[0].name;
        console.log(fImage);
        this.setState({
            fImage: fImage
        });
    }
    submitForm = (event) => {
        event.preventDefault();
        this.setState({
            isRedirect: true
        });
    }
    render() {
        if (this.state.isRedirect) {
           
            console.log(this.state);
            return <Redirect to="/" />
        }
        return (
            <div>
                {/* Page Header */}
                <header className="masthead" style={{ backgroundImage: 'url("img/contact-bg.jpg")' }}>
                    <div className="overlay" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <div className="page-heading">
                                    <h1>Contact Me</h1>
                                    <span className="subheading">Have questions? I have answers.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Main Content */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>

                            <form name="sentMessage" id="contactForm" noValidate>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Name</label>
                                        <input name="fName" onChange={(event) => { this.isChange(event) }} type="text" className="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name." />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Email Address</label>
                                        <input name="fEmail" onChange={(event) => { this.isChange(event) }} type="email" className="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address." />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group col-xs-12 floating-label-form-group controls">
                                        <label>Phone Number</label>
                                        <input name="fPhone" onChange={(event) => { this.isChange(event) }} type="tel" className="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number." />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Message</label>
                                        <textarea name="fMessage" onChange={(event) => { this.isChange(event) }} rows={5} className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message." defaultValue={""} />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <input onChange={(event) => {this.isChangeFile(event)}} type="file" className="form-control-file" name="fImage" id="" placeholder="" aria-describedby="fileHelpId"/>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <select onChange={(event) => { this.isChange(event) }} className="form-control" name="fLocation" id="">
                                            <option value="Quảng Trị">Quảng Trị</option>
                                            <option value="Huế">Huế</option>
                                            <option value="Đà Nẵng">Đà Nẵng</option>
                                            <option value="Quảng Nam">Quảng Nam</option>
                                            <option value="Quảng Ngãi">Quảng Ngãi</option>
                                        </select>
                                    </div>
                                </div>
                                <br />
                                <div id="success" />
                                <div className="form-group">
                                    <button type="submit" onClick={(event) => this.submitForm(event)} className="btn btn-primary" id="sendMessageButton">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <hr />
            </div>

        );
    }
}

export default Contact;