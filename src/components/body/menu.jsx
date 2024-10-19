import React, { useState } from 'react'
import DISHES from '../../data/dishes'
import MenuItem from './menuItem'

const Menu = () => {
  const [dishes, setDishes] = useState(DISHES)
  
  return (
    <div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              {dishes.map(dish=>{
                <MenuItem key={dish.id} dish={dish}/>
              })}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Menu
