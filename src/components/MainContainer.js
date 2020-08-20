import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap'
import MenuCards from "./MenuCards"

import {DISHES} from '../shared/dishes'
import DishDetail from './DishdetailComponent'



export default class MainComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dishes: DISHES,
            
            selectedDishId: null
        }

        // this.renderDish = this.renderDish.bind(this)
        this.onDishSelect = this.onDishSelect.bind(this)
    }

    onDishSelect(dishId){
        console.log(dishId)
        console.log( this.state.dishes.filter((dish)=> dish.id === this.state.selectedDishId))
        this.setState({
            selectedDishId: dishId
         })
    }



    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">CodeNinja rocks</NavbarBrand>
                    </div>
                </Navbar>
                <hr/>
                <MenuCards dishes={this.state.dishes} onClickHandle={(dishId)=>this.onDishSelect(dishId)}/>

                <DishDetail selected={ this.state.dishes.filter((dish)=> dish.id === this.state.selectedDishId)[0]} />
            </div>
        )
    }
}
