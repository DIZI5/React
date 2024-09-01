import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import TaskList from './components/tasks/TaskList';
import TaskLayout from './components/tasks/TaskLayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<TaskLayout/>}>
            <Route index element = {<TaskList/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;