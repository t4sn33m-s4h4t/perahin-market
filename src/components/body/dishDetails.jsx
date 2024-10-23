import React from 'react'
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';
import LoadComments from './loadComments';
import CommentForm from './commentForm';

export default function DishDetails({ dish }) {

  return (
    <div className='mb-5'>
      <Card style={{ marginTop: '11px' }}>
        <CardImg top src={'/src/' + dish.image} alt={dish.name} />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>
            {dish.description}
          </CardText>
          <CardText>
            {dish.price}/-
          </CardText>
          <LoadComments commentId={dish.id} />
          <hr />
          <CommentForm dishId={dish.id} />
        </CardBody>
      </Card>

    </div>
  )
}
