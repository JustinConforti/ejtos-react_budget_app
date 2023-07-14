import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);

    const increaseAllocation = () => {
        const expense ={
            cost: 10,
        };
        dispatch({
            type: 'budget_add',
            payload: expense,
        });
    };

    const decreaseAllocation = () => {
        const expense ={
            cost: 10,
        };
        dispatch({
            type: 'budget_red',
            payload: expense,
        });
    };


    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
        <button onClick={event => increaseAllocation()}>+</button>
        <button onClick={event => decreaseAllocation()}>-</button>
        </div>


    )
}

export default Budget;