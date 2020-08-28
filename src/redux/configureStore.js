import {createStore, combineReducers} from 'redux'
import {Dishes} from './dishes.js'
import {Comments} from './comments.js'
import {Leaders} from './leaders.js'
import {Promotions} from './promotions.js'

export const ConfigureStore = ()=>{
    const store = createStore(
        combineReducers({
            // Global state for the application
            dishes: Dishes,
            comments:Comments,
            leaders:Leaders,
            promotions: Promotions
        })
    );

    console.log(store)
    return store;
}
