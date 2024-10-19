import React, { useState } from 'react'
import DISHES from '../../data/dishes'
import MenuItem from './menuItem'
import DishDetails from './dishDetails'

const Menu = () => {
    const [dishes, setDishes] = useState(DISHES)
    const [selectedDish, setselectedDish] = useState(null)
    function onDishSelect(dish) {
        setselectedDish(dish);
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {
                            dishes.map(dish => <MenuItem
                                onDishSelect={onDishSelect}
                                key={dish.id}
                                dish={dish}
                            />
                            )
                        }

                    </div>
                    <div className="col-6">
                    {selectedDish && <DishDetails dish={selectedDish} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
