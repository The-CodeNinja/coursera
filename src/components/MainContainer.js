import React, {Component} from 'react';
import MenuCards from "./MenuCards"

import {DISHES} from '../shared/dishes'
import {COMMENTS} from '../shared/comments'
import {PROMOTIONS} from '../shared/promotions'
import {LEADERS} from '../shared/leaders'


import DishDetail from './DishdetailComponent'
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import {Switch, Route, Redirect} from 'react-router-dom'
import HomeComponent from './HomeComponent';
import MenuComponent from './MenuCards';
import ContactComponent from './ContactComponent';
import About from './AboutComponent';


export default class MainComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS,
            
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

        const HomeButton = ()=>{
            return(
               <HomeComponent 
                    dish={this.state.dishes.filter((dish)=> dish.featured)[0]} 
                    promotion={this.state.promotions.filter((promo)=> promo.featured)[0]} 
                    leader={this.state.leaders.filter((lead)=> lead.featured)[0]}  
                /> 
            )
        }     
        
        const SelectedDish = ({match})=>{
            return(
                <DishDetail 
                    dish={this.state.dishes.filter( (dish)=> dish.id === parseInt(match.params.dishId) )[0]}
                    comments={this.state.comments.filter( (comment)=> comment.dishId === parseInt(match.params.dishId) )}
                />
            )
        }
        
        return (
            <div>
                <HeaderComponent/>
                <Switch>
                    <Route path="/home" component={HomeButton}/>
                    <Route exact path="/menu" component={()=> <MenuComponent dishes={this.state.dishes} />}/>
                    <Route exact path="/menu/:dishId" component={SelectedDish}/>
                    <Route exact path="/aboutus" component={()=> <About leaders={this.state.leaders} />}/>
                    <Route exact path="/contactus" component={()=> <ContactComponent/>}/>
                    <Redirect to="/home" />
                </Switch>
                <FooterComponent/>
            </div>
        )
    }
}
