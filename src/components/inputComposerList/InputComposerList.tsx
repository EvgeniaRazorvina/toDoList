import { useState } from 'react';
import './inputComposerList.css';

type InputComposerListProps = {
    onChangeText?: (text: any) => void ;
    onPress?: () => void;
    value?: string;
}

const InputComposerList: React.FC<InputComposerListProps> = (props) => {
    return(
        <div className="input-wrapper d-flex justify-content-center">
            <input className="input" 
                type="text"
                placeholder='Create a new todo'
                value={props.value}
                onChange={props.onChangeText}
            />
            <button  
                type="submit" 
                className="btn"
                onClick={props.onPress}
            >
                    Add a task
            </button>
        </div>
    )
}

export default InputComposerList;