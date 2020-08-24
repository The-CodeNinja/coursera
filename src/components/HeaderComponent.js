import React, { Component } from 'react'
import {Navbar, Nav, NavbarToggler, NavItem, Collapse, NavbarBrand, Jumbotron,Button, Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input} from 'reactstrap'
import {NavLink} from 'react-router-dom'

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isOpen:false,
             isModalOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
        this.handleLogin = this.handleLogin.bind(this)

    }
    
    toggleNav(){
        this.setState({
            isOpen: !(this.state.isOpen)
        })
    }


    toggleModal(){
        this.setState({
            isModalOpen: !(this.state.isModalOpen)
        })
    }

    handleLogin(event){
        this.toggleModal();
        console.log('username: ' + this.username.value)
        console.log('password: ' + this.password.value )
        console.log('remember: ' + this.remember.checked)
        event.preventDefault();
    }

    render() {
        return (
            <>
                <Navbar dark className="navbar-dark" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" 
                                alt="The CodeNinja" width="50"/>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isOpen} navbar>                        
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg"></span> About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg"></span> Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg"></span> Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button onClick={this.toggleModal} color="primary">
                                    <span className="fa fa-sign-in fa-lg">Log In</span>
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>

                    </div>
                </Navbar>

                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 colsm-6">
                                <h1>The Code Ninja rocks again</h1>
                                <p>
                                    We learn stuff from every possible internet resource available. Till date we havnet felt the need to pay a single penny to any course. This is the way gen-z does stuff!
                                </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader  toggle={this.toggleModal}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor ="username">Username</Label>
                                <Input type="text" name="username" id="username" 
                                    innerRef={(input) => this.username = input}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor ="pswd">Password</Label>
                                <Input type="password" name="pswd" id="pswd" 
                                    innerRef={(input) => this.password = input}
                                />

                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" id="remember" 
                                        innerRef={(input) => this.remember = input}
                                    /> Remember Me
                                </Label>
                            
                            </FormGroup>
                            <Button type="submit" name="login" id="login" color="primary" value="submit">Log In</Button>
                          
                            
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}
