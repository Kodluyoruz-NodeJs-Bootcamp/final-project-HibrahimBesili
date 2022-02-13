import { Routes, Route, Link } from "react-router-dom";

import {Home, Profile, Register,Login, Post, AddPost} from './pages';
import GuardedRoute from './components/GuardedRoute';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route  element={<GuardedRoute />} >
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="post/:postId" element={<Post />} />
          <Route path="post" element={<Post />} />
          <Route path="add-post" element={<AddPost />} />
        </Route>
       

      </Routes>

    </div>
  );
}

export default App;
