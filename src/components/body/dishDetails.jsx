import React from 'react'
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';
import LoadComments from './loadComments';

export default function DishDetails({dish}) {
  
  return (
    <div>
      <Card style={{marginTop:'11px'}}>
        <CardImg top src={'/src/' + dish.image} alt={dish.name} />
        <CardBody 
        style={{textAlign:"left"}}
        >
            <CardTitle>{dish.name}</CardTitle>
            <CardText> 
            <p>{dish.description} </p>
            </CardText>
            <CardText> 
            <p>{dish.price}/- </p>

            </CardText>
      <LoadComments commentId={dish.id} />
        </CardBody>
      </Card>

    </div>
  )
}
