import React, { useEffect } from 'react'
import Navbar from "../components/Navbar"
import Blogs from "../components/BlogCard"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { client } from '../clientMethods'

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(()=>{
    const getBlogs = async()=>{
        const response = await client.get("/");
        setBlogs(response.data);
    }
    getBlogs();
  },[]);
  return (
    <>
        <Navbar />
        <Link to="/CreateBlog">
            <button>
                Create Blog
            </button>
        </Link>
        {blogs.map((item)=>(
            <Blogs item={item} key={item.id}/>
        ))}
    </>
  )
}

export default Home