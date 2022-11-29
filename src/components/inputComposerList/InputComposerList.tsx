import { useState } from 'react';
import './inputComposerListStyles.css';

type InputComposerListProps = {
    onChangeText?: (text: any) => void ;
    onPress?: () => void;
    value?: string;
}

const InputComposerList: React.FC<InputComposerListProps> = (props) => {
const handleSubmit = (e: any) => {
    e.preventDefault();
}

    return(
        <form className="input-wrapper d-flex justify-content-center" onSubmit={handleSubmit}>
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
        </form>
    )
}

export default InputComposerList;