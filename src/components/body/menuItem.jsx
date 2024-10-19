import React from 'react'
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const MenuItem = ({dish, onDishSelect}) => {
  return (
    <div>
      <Card style={{margin:"10px"}}>
        <CardBody>
            <CardImg 
            width="100%" 
            src={'/src/' + dish.image} 
            style={{opacity: "0.5"}}
            />
            <CardImgOverlay>
                <CardTitle 
                style={{cursor:"pointer", textAlign:'center', fontWeight:'bolder', fontSize:'30px'}}
                onClick={()=>onDishSelect(dish)}
                >
                    {dish.name}
                </CardTitle>
                </CardImgOverlay>
        </CardBody>
      </Card>
    </div>
  )
}

export default MenuItem
