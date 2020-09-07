import React from 'react'
import {Breadcrumb, BreadcrumbItem, Button, FormGroup, Label, Row, Col} from 'reactstrap'
import {Link} from 'react-router-dom'
import {actions, Control, Form, Errors} from 'react-redux-form'


const required = (val) => val&&val.length;
const minLength = (len) => (val = 0) => (val) && (val.length >= len)
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const isNumber = (val) => { 
    console.log(!isNaN(val))
    return !(isNaN(val));}
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

export default class ContactComponent extends React.Component {
    
    constructor(props) {
        super(props)
    /*
    // state of form is managed by react-redux-form
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
        this.handleFirstClick = this.handleFirstClick.bind(this)
        this.validate = this.validate.bind(this)
        */
       this.onFormSubmit = this.onFormSubmit.bind(this)

    }
    /*
    ///Done by react-redux-form///
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
    */

    onFormSubmit(values){
        console.log(JSON.stringify(values))
        this.props.resetFeedbackForm();
    }

    render(){

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


                        <Form model='feedback' onSubmit={(values) => this.onFormSubmit(values)} >
                            <Row className='form-group'>
                                <Label htmlFor="firstname" md={2} >First Name</Label>
                                <Col md={10}>
                                    <Control.text 

                                        model='.firstname'
                                        id="firstname" 
                                        name="firstname"
                                        className="form-control"
                                        validators={{required,minLength: minLength(3), maxLength: maxLength(15)}}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: "Required ",
                                            minLength: "Must be greater than 2 charecters",
                                            maxLength: "Must be smaller than 15 charecters"
                                        }}
                                    />
                                    {/* <FormFeedback>{errors.firstname}</FormFeedback> */}
                                </Col>
                            </Row>
                            <Row className='form-group'>                                <Label htmlFor="lastname" md={2} >Last Name</Label>
                                <Col md={10}>
                                    <Control.text 
                                        model='.lastname'
                                        type="text" 
                                        id="lastname" 
                                        name="lastname"
                                        className='form-control'
                                        validators={{required,minLength: minLength(3), maxLength: maxLength(15)}}

                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            minLength: "must be greater than 2 charecters",
                                            maxLength: "must be smaller than 15 charecters"
                                        }}
                                    />
                                    {/* <FormFeedback>{errors.lastname}</FormFeedback> */}
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor="telnum" md={2} >Telephone Number</Label>
                                <Col md={10}>
                                    <Control.text
                                        model='.telnum' 
                                        id="telnum" 
                                        name="telnum"
                                        className='form-control'
                                        validators={{required,minLength: minLength(3), maxLength: maxLength(15), isNumber}}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            minLength: "must be greater than 2 numbers",
                                            maxLength: "must be smaller than 15 numbers",
                                            isNumber : "must be numbers only"
                                        }}
                                    />
                                    {/* <FormFeedback>{errors.telnum}</FormFeedback> */}
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor="email" md={2} >Email ID</Label>
                                <Col md={10}>
                                    <Control.text
                                        model='.email'
                                        id="email" 
                                        name="email"
                                        className='form-control'
                                        validators={{required, validEmail}}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            validEmail: "invalid email address"
                                        }}
                                    />
                                    {/* <FormFeedback>{errors.email}</FormFeedback> */}
                                </Col>
                            </Row>

                            <Row className='form-group'>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup>
                                        <div className="form-check">
                                            <Label check>
                                                <Control.checkbox model=".agree" name="agree"
                                                    className="form-check-input"
                                                    /> {' '}
                                                    <strong>May we spam you?</strong>
                                            </Label>
                                        </div>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select 
                                        model='.contactType' 
                                        name="contactType"
                                        className='form-group'
                                        >
                                            <option>Tel.</option>
                                            <option>Mail</option>
                                        </Control.select>
                                </Col>
                                
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor="message" md={2} >Message For Us</Label>
                                <Col md={10}>
                                    <Control.textarea
                                        model='.message'
                                        id="message" 
                                        rows="12"
                                        name="message"
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

/*
react controled form
<FormGroup row>
    <Col> 
        <Label htmlFor="email" md={2} >Email ID</Label>
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

 */

/* react-redux-form 

<Row className='form-group'>
    <Label htmlFor="email" md={2} >Email ID</Label>
    <Col md={10}>
        <Control.text
            model='.email'
            id="email" 
            name="email"
            className='form-control'
        />
    </Col>
</Row>
*/
