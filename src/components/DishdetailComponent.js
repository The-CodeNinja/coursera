import React, { Component } from 'react'
import { Card, CardBody, CardText, CardImg, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap'
import {Link} from 'react-router-dom'

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
            </div>
        )
    }
    else {
        return <div></div>
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