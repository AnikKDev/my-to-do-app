import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from '../src/Pages/Home';
import ToDo from '../src/Pages/ToDo';
import SignIn from '../src/Pages/SignIn';
import SignUp from '../src/Pages/SignUp';
import RequireAuth from './Pages/Utilities/RequireAuth';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/todo" element={
          <RequireAuth>
            <ToDo></ToDo>
          </RequireAuth>
        }></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>

      </Routes>
    </div>
  );
}

export default App;
