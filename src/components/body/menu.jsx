import React, { useState } from 'react'
import MenuItem from './menuItem'
import DishDetails from './dishDetails'
import title from '../../data/title'
import { connect } from 'react-redux' 
const mapStateToProps = state =>{
  
    return {
      dishes: state.dishes,
      comments: state.comments,
    }
  }
  
//   const mapDispatchToProps = (dispatch)=>{
//     return {
//         addComment: (dishId, rating, author, comment) =>{
//             dispatch({
//                 type: ADD_COMMENT,
//                 payload: {
//                     dishId: dishId,
//                     author: author,
//                     rating: rating,
//                     comment: comment,
    
//                 }
//             })
//         }
//     }
//     }
 
const Menu = ({dishes}) => {
    document.title = title + 'Menu' 
    const [selectedDish, setselectedDish] = useState(null)
    function onDishSelect(dish) {
        setselectedDish(dish);
    }
    const menu = dishes.map(dish => {
        return (
            <MenuItem
                onDishSelect={onDishSelect}
                key={dish.id}
                dish={dish}
            />
        )
    }
    )




return (
    <div>
        <div className="container">
            <div className="row">
            <div className="col-md-7">
                {menu}
            </div>
            <div className="col-md-5">
                    {selectedDish && <DishDetails dish={selectedDish} />}

            </div>
            </div>
        </div>
    </div>
)
}
export default connect(mapStateToProps) (Menu);
