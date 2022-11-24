
import './app.css';
import InputComposerList from './components/inputComposerList/InputComposerList';
import ToDoItem from './components/inputComposerList/toDoItem/ToDoItem';


function App() {
    return (
      <div className="app text-center">
          <h1 className='header'>ToDo List App</h1>
          <InputComposerList/>
          <ToDoItem/>
          
      </div>
    )
}

export default App;
