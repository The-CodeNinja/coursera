import React, {Component} from 'react';
// custom Components 
import MenuCards from "./MenuCards"
import DishDetail from './DishdetailComponent'
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import HomeComponent from './HomeComponent';
import MenuComponent from './MenuCards';
import ContactComponent from './ContactComponent';
import About from './AboutComponent';

// pre-built components
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const mapStateToProps = (state)=>{
    return {
        dishes: state.dishes,
        comments: state.comments,
        leaders: state.leaders,
        promotions: state.promotions
    }
}


class MainComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            
            selectedDishId: null
        }

        // this.renderDish = this.renderDish.bind(this)
        this.onDishSelect = this.onDishSelect.bind(this)
    }

    onDishSelect(dishId){
        console.log(dishId)
        console.log( this.props.dishes.filter((dish)=> dish.id === this.props.selectedDishId))
        this.setState({
            selectedDishId: dishId
         })
    }



    render() {

        const HomeButton = ()=>{
            return(
               <HomeComponent 
                    dish={this.props.dishes.filter((dish)=> dish.featured)[0]} 
                    promotion={this.props.promotions.filter((promo)=> promo.featured)[0]} 
                    leader={this.props.leaders.filter((lead)=> lead.featured)[0]}  
                /> 
            )
        }     
        
        const SelectedDish = ({match})=>{
            return(
                <DishDetail 
                    dish={this.props.dishes.filter( (dish)=> dish.id === parseInt(match.params.dishId) )[0]}
                    comments={this.props.comments.filter( (comment)=> comment.dishId === parseInt(match.params.dishId) )}
                />
            )
        }
        
        return (
            <div>
                <HeaderComponent/>
                <Switch>
                    <Route path="/home" component={HomeButton}/>
                    <Route exact path="/menu" component={()=> <MenuComponent dishes={this.props.dishes} />}/>
                    <Route exact path="/menu/:dishId" component={SelectedDish}/>
                    <Route exact path="/aboutus" component={()=> <About leaders={this.props.leaders} />}/>
                    <Route exact path="/contactus" component={()=> <ContactComponent/>}/>
                    <Redirect to="/home" />
                </Switch>
                <FooterComponent/>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(MainComponent))