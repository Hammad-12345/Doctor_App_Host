import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import TimeTable from './Pages/TimeTable';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import About from './Pages/About';
function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path={'/'} element={<Home/>}/>
    <Route path={'/TimeTable'} element={<TimeTable/>}/>
    <Route path={'/About'} element={<About/>}/>
    <Route path={'/Blog'} element={<Blog/>}/>
    <Route path={'/Contact'} element={<Contact/>}/>
  </Routes>
  </BrowserRouter>
  </>
}

export default App;
