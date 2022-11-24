import { useState } from 'react';
import './inputComposerList.css';

type InputComposerListProps = {
    onChange?: () => void;
    onPress?: () => void;
}

const InputComposerList: React.FC<InputComposerListProps> = (props) => {
    const [todo, setTodo] = useState("");
    return(
        <div className="input-wrapper d-flex justify-content-center">
            <input className="input" 
                type="text"
                placeholder='Create a new todo'
                value={todo}
                onChange={e => {
                    setTodo(e.target.value)
                }}
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