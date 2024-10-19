import React from 'react'
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';

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
            <p>{dish.price}/- </p>

            </CardText>
        </CardBody>
      </Card>
    </div>
  )
}
