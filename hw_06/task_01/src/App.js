import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import PhoneBook from './components/users/PhoneBook';
import UserLayout from './components/users/UserLayout';
import NewUser from './components/users/NewUser';
import EditUser from './components/users/EditUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<UserLayout/>}>
            <Route index element = {<PhoneBook/>}/>
            <Route path = "new-user" element = {<NewUser/>}/>
            <Route path = "edit/:id" element = {<EditUser/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;