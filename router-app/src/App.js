import logo from './logo.svg';
import './App.css';
import HOME from './component/Home';
import Dashboard from './component/Dashboard';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Login from './component/Login';
import Blog from './component/Blog';
import Post from './component/Post'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProtectedRoute from './component/ProtectedRoute'
import Home from './component/Home';
function App() {
  const [isAuth, setIsAuth] = useState(false)
  const navigate = useNavigate();
  const onLogin = () => {
    setIsAuth(true)
    navigate('/dashboard')
  }
  const onLogout = () => {
    setIsAuth(false)
    navigate('/login')
  }
  return (
    <div className="App">
      <ul>
        <Link to='/'>Home</Link>
        <Link to='login'>Login</Link>
        <Link to='blog'>Blog Posts</Link>
        <Link to='dashboard'>Dashboard</Link>
        {isAuth? <button onClick={onLogout}>Logout</button>:<></>}
      </ul>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/post/:num' element={<Post />} />
        <Route path='/login' element={<Login onLogin={onLogin} />}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/dashboard' element={
          <ProtectedRoute isAuth={isAuth}><Dashboard/></ProtectedRoute>}></Route>
      </Routes>
    </div>
  );
}

export default App;
