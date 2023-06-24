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
  },[blogs]);
  return (
    <>
        <Navbar />
        <div className='flex flex-col h-screen items-center m-10'>
            <div className='flex '>
                <button className="mt-3 bg-transparent hover:bg-blue-950 text-blue-700 font-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    <Link to="/CreateBlog">
                        Create Blog
                    </Link>
                </button>
            </div>
            <h1 className='text-3xl mt-20'>
                All Blogs:
            </h1>
            <div className='flex m-auto flex-wrap'>
                {blogs.map((item)=>(
                    <Blogs item={item} key={item.id}/>
                ))}
            </div>
        </div>
    </>
  )
}

export default Home