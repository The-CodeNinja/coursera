import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem  } from 'reactstrap'
import {Link} from 'react-router-dom'

const MenuCard = ({dish, onClick})=> {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`}>
                <CardImg src={dish.image} alt={dish.name} />
                <CardImgOverlay body className="ml-5">
                    <CardTitle>{dish.name}</CardTitle>                           
                </CardImgOverlay>
            </Link>
        </Card>
    )
}

function MenuComponent(props){
       
    const menu = props.dishes.map( (dish)=>{
        return(
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <MenuCard dish={dish} />
            </div>
        )
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to={"/home"}>Home</Link> </BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="col-12">
                <h3>Menu</h3>
                <hr/>
            </div>                
            <div className="row">
                {menu}
            </div>
        </div>
    )
    
}

export default MenuComponent
