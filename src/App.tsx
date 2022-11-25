import { useState } from 'react';
import './app.css';
import InputComposerList from './components/inputComposerList/InputComposerList';
import ToDoItem from './components/toDoItem/ToDoItem';

function App() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState(Array<string>);
    const addTodo = () => {
        if (todo !== '') {
            setTodos([...todos, todo]);
            setTodo('');
        }
    };

    const deleteTodo = (todoIndex: any) => {
      const newTodos = todos.filter((index) => {
        return index !== todoIndex
      })
      setTodos(newTodos);
    }
    return (
        <div className="app text-center">
            <h1 className="header">ToDo List App</h1>
            <InputComposerList
                onPress={addTodo}
                value={todo}
                onChangeText={text => setTodo(text.target.value)}
            />
            {todos.map((el,index) => (
              <ToDoItem 
                key={`el${index}`} 
                value={el} 
                onPressRemoval={() => deleteTodo(el)}/>
            ))}
        </div>
    );
}

export default App;
