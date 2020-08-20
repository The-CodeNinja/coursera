import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'


const MenuCard = ({dish, onClick})=> {
    return (
        <Card onClick={()=> onClick(dish.id) }>
            <CardImg src={dish.image} alt={dish.name} />
            <CardImgOverlay body className="ml-5">
                <CardTitle>{dish.name}</CardTitle>                           
            </CardImgOverlay>
        </Card>
    )
}

function MenuComponent(props){
       
    const menu = props.dishes.map( (dish)=>{
        return(
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <MenuCard dish={dish} onClick={()=> props.onClickHandle(dish.id) } />
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

export default MenuComponent
