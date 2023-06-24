import React from 'react';
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateBlog from './pages/CreateBlog';
import Blog from './pages/Blog';
import BlogUpdate from './pages/BlogUpdate';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element = {<Home />}/>
        <Route path='/CreateBlog' element={<CreateBlog />}/>
        <Route path = "Blog" element={<Blog />}/>
        <Route path = "/Update" element={<BlogUpdate/>}/>
      </Routes>
    </BrowserRouter>
  )
}

