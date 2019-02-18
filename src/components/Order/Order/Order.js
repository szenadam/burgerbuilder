import React from 'react';
import classes from './Order.css';

const order = (props) => {
  return (
    <div className={classes.Order}>
      <p>Ingredients: Salad (1)</p>
      <p>Price: <strong>USD 4.45</strong></p>
    </div>
  );
};

export default order;
