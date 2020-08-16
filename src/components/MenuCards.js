import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap'


export class MenuComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            selectedDish: null
        }

        this.showDetails = this.showDetails.bind(this)
        this.onDishSelect = this.onDishSelect.bind(this)
    }

    onDishSelect(dish){
        console.log(dish)
        this.setState({
            selectedDishId: dish
        })
    }

    showDetails(dish){
        if(dish.id === this.state.selectedDishId)
            return (
                <CardText >{dish.description}</CardText>
            )
        else
            return ""
    }

    render() {

        const menu = this.props.dishes.map( (dish)=>{
            const details = this.showDetails(dish)
            return(
                <div key={dish.id} className="col-12 col-md-4 mt-5">
                    <Card onClick ={()=>{this.onDishSelect(dish.id)}}>
                        
                        <CardImg src={dish.image} alt={dish.name} />

                        <CardImgOverlay body className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>                           
                        </CardImgOverlay>
                        {details}
                    </Card>
                </div>
            )
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        )
    }
}

export default MenuComponent
