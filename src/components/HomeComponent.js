import React from 'react'
import {Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText} from 'reactstrap'
import LoadingComponent from './loadingComponent'
import {baseUrl} from '../redux/baseUrl'


function RenderCard({item, isLoading, errMsg}) {
    console.log("item",item)
    if(isLoading || item === undefined){
        return (<LoadingComponent/>)
    }
    else if(errMsg){
        return (
            <h4>{errMsg}</h4>
        )
    }
    else{
        return (
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name} />
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
            
        )}
}

export default function HomeComponent(props) {

    return (

        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard 
                        item={props.dish} 
                        isLoading={props.isLoading} 
                        errMsg={props.errMsg}/>
                </div>
                <div className="col-12 col-md m-1" >
                    <RenderCard 
                        item={props.leader}
                        isLoading={props.Loading} 
                        errMsg={props.errMsg}/>
                </div>
                <div className="col-12 col-md m-1" >
                    <RenderCard 
                        item={props.promotion}
                        isLoading={props.promosLoading} 
                        errMsg={props.errMsg}/>
                </div>
                
            </div> 
        </div>
    )
}
