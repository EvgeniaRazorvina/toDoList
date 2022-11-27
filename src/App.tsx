import { useState } from 'react';
import './app.css';
import InputComposerList from './components/inputComposerList/InputComposerList';
import ToDoCard from './components/toDoCard/ToDoCard';
import ToDoItem from './components/toDoItem/ToDoItem';
import { getTextAreaData, saveTextAreaData } from './data/localStorage';

function App() {
    const [todo, setTodo] = useState('');
    const [titleTodo, setTitleToDo] = useState('');
    const [todos, setTodos] = useState(Array<string>);
    const [showCard, setShowCard] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [description, setDescription] = useState('');

    const addTodo = () => {
        if (todo !== '') {
            setTodos([...todos, todo]);
            setTodo('');
        }
    };

    const deleteTodo = (todoIndex: any) => {
        const newTodos = todos.filter(index => {
            return index !== todoIndex;
        });
        setTodos(newTodos);
    };
    return (
        <div className="app text-center">
            <h1 className="header">ToDo List App</h1>
            <InputComposerList
                onPress={addTodo}
                value={todo}
                onChangeText={text => setTodo(text.target.value)}
            />
            {todos.map((el, index) => (
                <ToDoItem
                    key={`el${index}`}
                    value={el}
                    onPressEdit={() => {
                        setShowCard(true);
                        setTitleToDo(el);
                        setDisabled(false);
                    }}
                    onPressRemoval={() => {
                        deleteTodo(el);
                        setDisabled(false);
                    }}
                />
            ))}
            <ToDoCard
                show={showCard}
                onPressCansel={() => {setShowCard(false);
                  setDescription("");
                }}
                onHide={() => {
                    setShowCard(false);
                }}
                title={titleTodo}
                disabled={disabled}
                onChangeText={text => setDescription(text.target.value)}
                onPressSave={() => {
                    setDisabled(true);
                    setShowCard(false);

                }}
                value={description}
            />
        </div>
    );
}

export default App;
