import React, { Component } from 'react'
import { Card, CardBody, CardText, CardImg, CardTitle } from 'reactstrap'

export default class DishDetail extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

        this.renderDish = this.renderDish.bind(this)
        this.renderComments = this.renderComments.bind(this)
    }

    renderComments(comments) {
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

    renderDish(dish) {
        if (dish != null) {
            return (
                <>
                <div className="col-12 col-md-5 m-1">
                    <Card >
                        <CardImg src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle><h4>{dish.name}</h4></CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                {this.renderComments(dish.comments)}
                </>
            )
        }
        else {
            return <div></div>
        }
    }

    

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderDish(this.props.selected)}
                </div>
            </div>
        )

    }
}