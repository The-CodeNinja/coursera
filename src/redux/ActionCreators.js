import * as ActionTypes from './ActionTypes'
import {DISHES} from '../shared/dishes'


export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    
})

export const fetchDishes = ()=> (dispatch) => {
    // function to simulate fetching data from server
    dispatch(dishesLoading(true))
    setTimeout(()=>{
        dispatch(addDishes((DISHES)))
    },2000)
}

// reducer functions
export const dishesLoading = ()=>({
    type: ActionTypes.DISHES_LOADING
})

export const dishesFailed = (errorMsg)=> ({
    type: ActionTypes.DISHES_FAILED,
    payload: errorMsg
})

export const addDishes = (dishes)=> ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})