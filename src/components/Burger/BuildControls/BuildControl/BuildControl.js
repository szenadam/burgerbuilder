import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div classNam={classes.Label}>{props.label}</div>
      <button classNam={classes.Less}>Less</button>
      <button classNam={classes.More}>More</button>
    </div>
  );
};

export default buildControl;
