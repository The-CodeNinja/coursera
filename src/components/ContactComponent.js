import React from 'react'
import {Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback} from 'reactstrap'
import {Link} from 'react-router-dom'


export default class ContactComponent extends React.Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            firstname: "",
            lastname: "",
            telnum: "",
            email : "",
            agree: false,
            contactType: "Tel.",
            message: "",
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        }

        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.handleFirstClick = this.handleFirstClick.bind(this)
        this.validate = this.validate.bind(this)
    }
    
    onInputChange(event){
        const target = event.target
        const name = target.name
        const value= target.type === "checkbox" ? target.checked : target.value

        this.setState({
            [name]: value
        })
    }

    handleFirstClick = (field) => (evt) => {
        console.log("field", field)
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };

        console.log(lastname)
        if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';

        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';

        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';

        if(this.state.touched.email && email.split('@').length !== 2)
            errors.email = 'Email should contain one @';

        return errors;
    }

    onFormSubmit(event){
        console.log(this.state)
    }

    render(){
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);

        return (
            <div className="container">telnum
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to={"/home"}>Home</Link> </BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr/>
                </div> 
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3>Contact us here!</h3>

                        <Form onSubmit={this.onFormSubmit} >
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2} >First Name</Label>
                                <Col md={10}>
                                    <Input 
                                        type="text" 
                                        id="firstname" 
                                        name="firstname"
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''}
                                        onBlur={this.handleFirstClick('firstname')}
                                        onChange={this.onInputChange}
                                    />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2} >Last Name</Label>
                                <Col md={10}>
                                    <Input 
                                        type="text" 
                                        id="lastname" 
                                        name="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lastname}
                                        valid={errors.lastname === ''}
                                        invalid={errors.lastname !== ''}
                                        onBlur={this.handleFirstClick('lastname')}
                                        onChange={this.onInputChange}
                                    />
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2} >Telephone Number</Label>
                                <Col md={10}>
                                    <Input 
                                        type="tel" 
                                        id="telnum" 
                                        name="telnum"
                                        placeholder="Telephone Num"
                                        value={this.state.telnum}
                                        valid={errors.telnum === ''}
                                        invalid={errors.telnum !== ''}  
                                        onBlur={this.handleFirstClick('telnum')}
                                        onChange={this.onInputChange}
                                    />
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2} >Email ID</Label>
                                <Col md={10}>
                                    <Input 
                                        type="email" 
                                        id="email" 
                                        name="email"
                                        placeholder="email@email.com"
                                        value={this.state.email}
                                        valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onBlur={this.handleFirstClick('email')}
                                        onChange={this.onInputChange}
                                    />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input 
                                                type="checkbox" name="agree" 
                                                checked={this.state.agree} 
                                                onChange={this.onInputChange}
                                            />{" "} {/* equivalent of &nbsp; */}<strong>Should we spam your mail id?</strong>
                                                

                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Input 
                                        type="select" name="contactType"
                                        value={this.state.contactType}
                                        onChange={this.onInputChange}
                                        >
                                            <option>Tel.</option>
                                            <option>Mail</option>
                                        </Input>
                                </Col>
                                
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2} >Message For Us</Label>
                                <Col md={10}>
                                    <Input 
                                        type="textarea" 
                                        id="message" 
                                        rows="12"
                                        name="message"
                                        placeholder="message..."
                                        value={this.state.message}
                                        onChange={this.onInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
