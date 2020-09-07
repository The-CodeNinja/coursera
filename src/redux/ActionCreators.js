import * as ActionTypes from './ActionTypes'
// import {DISHES} from '../shared/dishes'
import {baseUrl} from './baseUrl'

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    
})

// FETCH DISHES 

export const fetchDishes = ()=> (dispatch) => {
    // function to simulate fetching data from server
    dispatch(dishesLoading(true))
    return fetch(baseUrl + 'dishes')
        .then(response => {
            console.log("dish fetch response" ,response.json)
            return response.json()}) //convert the response to usable json format
        .then( dishes => dispatch(addDishes(dishes)))
}

export const dishesLoading = ()=>({
    type: ActionTypes.DISHES_LOADING
})

export const addDishes = (dishes)=> ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})

export const dishesFailed = (errorMsg)=> ({
    type: ActionTypes.DISHES_FAILED,
    payload: errorMsg
})
// FETCH COMMENTS

export const fetchComments = ()=> (dispatch) => {    
    return fetch(baseUrl + 'comments')
        .then(response => response.json()) //convert the response to usable json format
        .then( comments => dispatch(addComments(comments)))
}

export const addComments = (comments)=> ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
})

export const commentsFailed = (errorMsg)=> ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errorMsg
})


export const fetchPromos = ()=> (dispatch) => {
    // function to simulate fetching data from server
    dispatch(promosLoading(true))
    
    return fetch(baseUrl + 'promotions')
        .then(response => response.json()) //convert the response to usable json format
        .then( promos => dispatch(addPromos(promos)))
}

export const promosLoading = ()=>({
    type: ActionTypes.PROMOS_LOADING
})

export const addPromos = (promos)=> ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
})

export const promosFailed = (errorMsg)=> ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errorMsg
})