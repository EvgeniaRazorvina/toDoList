import React from 'react';
import './toDoItem.css';

const iconEdit = require ('../../images/iconShelves.png');
const iconRemove = require('../../images/trash.png');

type ToDoItemProps = {
    value: string;
    onPressRemoval?: () => void;
    onPressEdit?: () => void;
}

const ToDoItem: React.FC<ToDoItemProps> = props => {
    return(
        <div className='toDoItem-wrapper d-flex justify-content-between'>
            <div className='description-time-wrapper  d-flex justify-content-between'>
                <input type='checkbox'/>
                <p className="description">{props.value}</p>
            </div>
            <div className="badjes">
                <button className='btn-edit' onClick={props.onPressEdit}>
                    <img src={iconEdit} alt="editing" />
                </button>
                <button className='btn-remove' 
                    onClick={props.onPressRemoval}>
                    <img src={iconRemove} alt="removal"/>
                </button>
            </div>
        </div>
    )
}

export default ToDoItem;