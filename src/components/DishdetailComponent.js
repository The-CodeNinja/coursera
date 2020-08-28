import React, { Component } from 'react'
import { Card, CardBody, CardText, CardImg, CardTitle, BreadcrumbItem, Breadcrumb, Row, Modal,ModalBody,ModalHeader, Label, Button } from 'reactstrap'
import {Link} from 'react-router-dom'
import {LocalForm, Control, Errors} from 'react-redux-form'

function renderDish(selectedDish) {
        
    if (selectedDish != undefined) {
        return (
            <>
            <div className="col-12 col-md-5 m-1">
                <Card >
                    <CardImg src={selectedDish.image} alt={selectedDish.name} />
                    <CardBody>
                        <CardTitle><h4>{selectedDish.name}</h4></CardTitle>
                        <CardText>{selectedDish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            </>
        )
    }
    else {
        return <div></div>
    }
}

function RenderComments({comments}) {
    if (comments != undefined) {
        
    const commentsList = comments.map( (comment)=>{
    return(
        <>
        <p key={comment.id}>{comment.comment}</p>
        <span>--{comment.author} , ini{comment.date}</span>
        </>
        )
    });

        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <div className="list-unstyled"> 
                    {commentsList}
                </div>
                <CommentForm/>

            </div>
        )
    }
    else {
        return <div><CommentForm/></div>
    }
}

const required = (val) => val&&val.length;
const minLength = (len) => (val = 0) => (val) && (val.length >= len)
const maxLength = (len) => (val) => !(val) || (val.length <= len)


class CommentForm extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this)
        this.handleNewComment = this.handleNewComment.bind(this)
    }

    toggleModal(){
        this.setState({
             isModalOpen: !this.state.isModalOpen
        })
    }
    
    handleNewComment(val){

        // inputs=JSON.stringify(val)
        console.log(val)
        this.toggleModal()
    }
    render(){
        return(
        <>
        <Button className="col-md-5 m-1" outline size="sm" onClick={this.toggleModal}><span className="fa fa-pencil"/> Submit Comment</Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>
                Submit Comment
            </ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={this.handleNewComment}>
                    <Row>
                        <Label htmlFor="rating">Ratings</Label>
                        <Control.select 
                            model=".rating"
                            id="rating"
                            name="rating"
                            className="form-control"
                        >
                            <option >1</option>
                            <option >2</option>
                            <option >3</option>
                            <option >4</option>
                            <option >5</option>
                        </Control.select>
                    </Row>
                    <Row>
                        <Label htmlFor="author">Your Name</Label>
                        <Control.text 
                            model=".author"
                            id="author"
                            name="author"
                            placeholder="Your Name"
                            className="form-control"
                            validators={{required, minLength : minLength(3), maxLength: maxLength(15)}}
                        />
                        <Errors 
                        className="text-danger"
                        model=".author"
                        show="touched"
                        messages={{
                            required: "Required",
                            minLength: "must be greater than 2 numbers",
                            maxLength: "must be smaller than 15 numbers",
                        }}/>
                    </Row>
                    <Row>
                        <Label htmlFor="comment">Comment</Label>
                        <Control.textarea 
                            model=".comment"
                            id="comment"
                            name="comment"
                            className="form-control"
                            rows="5"

                        />
                    </Row>
                    <Row>
                        <Button type="submit" color="primary" value="submit">Submit</Button>
                    </Row>
                </LocalForm>
            </ModalBody>
        </Modal>
        </>
        )
    }
}

function DishDetail({dish, comments}){
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to={"/menu"}>Menu</Link> </BreadcrumbItem>
                    <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="col-12">
                <h3>{dish.name}</h3>
                <hr/>
            </div> 
            <div className="container">
                <div className="row">
                    {/* Call as a function */}
                    {renderDish(dish)}
                    {/* Call as a component */}
                    <RenderComments comments = {comments} />
                </div>
            </div>
        </div>
    )
}

export default DishDetail