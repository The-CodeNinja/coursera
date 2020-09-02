import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Dishes} from './dishes.js'
import {Comments} from './comments.js'
import {Leaders} from './leaders.js'
import {Promotions} from './promotions.js'
import thunk from 'redux-thunk'
import logger from 'redux-logger'


// Set stort state to default values
export const ConfigureStore = ()=>{
    const store = createStore(
        combineReducers({
            // Reducer function to set Global state for the application
            dishes: Dishes,
            comments:Comments,
            leaders:Leaders,
            promotions: Promotions
        }), 
        // create store takes 2nd param as enhancer
        applyMiddleware(thunk, logger) // by doing this both thunk and logger become available throughout our app
        );

    // console.log(store)
    return store;
}
