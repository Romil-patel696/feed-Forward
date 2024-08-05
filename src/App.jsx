import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FoodPostPage from './pages/FoodPostPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Login from './components/Auth/Login';
import Signup from './components/Auth/Register'
import Dashboard from './components/Dashboard';
import PostDetails from './components/PostDetails';
const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage></HomePage>} />
        <Route path="/food-post" element={<FoodPostPage/>} />
        <Route path="/food-post/details/:id" element={<PostDetails/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        {/* if not working login and all */}
        <Route path='/dashboard' element={<Dashboard/>}/>
        {/* <Route path="/profile" element={<ProfilePage/>} /> */}
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {/* <Notifications />  */}
     <Footer />  
    </Router>
    
    </>
  );
};

export default App;
