import React, { useState, useEffect } from 'react';
import MenuItem from './menuItem';
import DishDetails from './dishDetails';
import title from '../../data/title';
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../../redux/actionCreators';
import Loading from './Loading';

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (dishId, rating, author, comment) => {
      dispatch(addComment(dishId, rating, author, comment));
    },
    fetchDishes: () => dispatch(fetchDishes()),
  };
};

const Menu = ({ dishes, fetchDishes }) => {
  document.title = title + 'Menu';
  const [selectedDish, setselectedDish] = useState(null);

  // Fetch dishes when the component mounts
  useEffect(() => {
    fetchDishes();
  }, [fetchDishes]);

  function onDishSelect(dish) {
    setselectedDish(dish);
  }

  if (dishes.isLoading) {
    return (
      <div>
        <Loading /> {/* Assuming Loading is a spinner or loading indicator */}
      </div>
    );
  }

  const menu = dishes.dishes.map((dish) => {
    return (
      <MenuItem
        onDishSelect={onDishSelect}
        key={dish.id}
        dish={dish}
      />
    );
  });

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
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
