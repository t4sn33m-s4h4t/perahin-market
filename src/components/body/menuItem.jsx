import React from 'react'
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';

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
                style={{cursor:"pointer"}}
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
MenuItem.propTypes = {
    dish: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  };
export default MenuItem
