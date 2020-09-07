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
import {actions} from 'react-redux-form'

// pre-built components
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {addComment, fetchDishes, fetchComments, fetchPromos} from '../redux/ActionCreators'


const mapStateToProps = (state)=>{
    return {
        dishes: state.dishes,
        comments: state.comments,
        leaders: state.leaders,
        promotions: state.promotions
    }
}

const mapDispatchToProps= (dispatch) => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: ()=>{dispatch(fetchDishes())},
    resetFeedbackForm : ()=> {dispatch(actions.reset('feedback'))}, //form will be called as feedback
    fetchComments: ()=>{dispatch(fetchComments())},
    fetchPromos: ()=>{dispatch(fetchPromos())}

})

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


    componentDidMount(){
        this.props.fetchDishes();
        this.props.fetchPromos();
        this.props.fetchComments();
    }

    render() {

        const HomeComponentContainer = ()=>{
            return(
                // component to render 3 cards on homepage
                // featured leader, dish and promotion is passed to the component
               <HomeComponent 
                    dish={this.props.dishes.dishes.filter((dish)=> dish.featured)[0]} 
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMsg={this.props.dishes.errMsg}
                    promotion={this.props.promotions.promotions.filter((promo)=> promo.featured)[0]} 
                    promosLoading={this.props.promotions.isLoading}
                    promosErrMsg={this.props.promotions.errMsg}
                    leader={this.props.leaders.filter((lead)=> lead.featured)[0]}  
                />
            )
        }     
        
        const SelectedDish = ({match})=>{
            return(
                <DishDetail 
                    dish={this.props.dishes.dishes.filter( (dish)=> dish.id === parseInt(match.params.dishId) )[0]}
                    dishLoading={this.props.dishes.isLoading}
                    dishesErrMsg={this.props.dishes.errMsg}
                    comments={this.props.comments.comments.filter( (comment)=> comment.dishId === parseInt(match.params.dishId) )}
                    commentsErrMsg={this.props.comments.errMsg}
                    addComment={this.props.addComment}

                />
            )
        }
        
        return (
            <div>
                <HeaderComponent/>
                <Switch>
                    <Route path="/home" component={HomeComponentContainer}/>
                    <Route exact path="/menu" component={()=> <MenuComponent dishes={this.props.dishes} />}/>
                    <Route exact path="/menu/:dishId" component={SelectedDish}/>
                    <Route exact path="/aboutus" component={()=> <About leaders={this.props.leaders} />}/>
                    <Route exact path="/contactus" component={()=> <ContactComponent resetFeedbackForm={this.props.resetFeedbackForm} />}/>
                    <Redirect to="/home" />
                </Switch>
                <FooterComponent/>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent))