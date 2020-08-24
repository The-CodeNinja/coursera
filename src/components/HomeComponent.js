import React from 'react'
import {Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText} from 'reactstrap'


function RenderCard({item}) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>
                    {item.name}
                </CardTitle>
                {/* if sub heading exists, render it as subtitle. */}
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>
                    {item.description}
                </CardText>
            </CardBody>
        </Card>
        
    )
}






export default function HomeComponent(props) {

    console.log(props)
    return (

        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish}/>
                </div>
                <div className="col-12 col-md m-1" >
                    <RenderCard item={props.leader}/>
                </div>
                <div className="col-12 col-md m-1" >
                    <RenderCard item={props.promotion}/>
                </div>
                
            </div> 
        </div>
    )
}
