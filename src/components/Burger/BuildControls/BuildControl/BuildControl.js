import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <button 
            className={classes.Less} 
            onClick={props.deducted} 
            disabled={props.disabled}>Less</button>
        <div 
            className={classes.Label}>{props.label}</div>
        <button 
            className={classes.More} 
            onClick={props.added}>More</button>
    </div>
);

export default buildControl;