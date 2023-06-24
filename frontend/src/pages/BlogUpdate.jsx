import React, { useState } from 'react'
import { client } from '../clientMethods';
import { Link, useLocation } from 'react-router-dom';

const CreateBlog = () => {
    const [blogData, setBlogData] = useState({
        title:"",
        image:"",
        description:"",
    });
    const location = useLocation();
    const itemData = location.state;
    
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setBlogData(previousData=>{
            return {
                ...previousData,
                [name]: value,
            }
        });
    }


    const handleUpdate = async(e) =>{
        e.preventDefault();
        await client.put(`/${itemData._id}`, blogData).then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        });
        alert("Your Blog has been Updated");
    }

    return (
    <>
        <div className='w-1/2 m-auto mt-20'>
                <form>
                    <div className="mb-6">
                        <label className="text-3xl block mb-2 text-sm font-medium text-gray-900 ">Title:</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            name="title"
                            defaultValue={itemData.title}
                            // value={blogData.title}
                            placeholder='Enter your updated Blog Title'
                            onChange={handleChange}
                            required />

                    </div>
                    <div className="mb-6">
                        <label className="text-3xl block mb-2 text-sm font-medium text-gray-900 ">Image URL:</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            name='image'
                            defaultValue={itemData.image}
                            // value={blogData.image}
                            placeholder='Enter your updated image url'
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-3xl mb-2 text-sm font-medium text-gray-900 ">Blog Description:</label>
                        <input
                            className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            name='description'
                            defaultValue={itemData.description}
                            // value={blogData.description}
                            placeholder='Enter your updated Blog Content'
                            onChange={handleChange}
                            required />
                    </div>
                    <button 
                    type="submit" 
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={handleUpdate}
                    >
                    <Link to="/">
                        Update
                    </Link>
                    </button>
                </form>
            </div>
    </>
  )
}

export default CreateBlog