import React, { useState } from 'react'
import { client } from '../clientMethods';
import { Link } from 'react-router-dom';

const CreateBlog = () => {
    const [blogData, setBlogData] = useState({
        title: "",
        image: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlogData(previousData => {
            return {
                ...previousData,
                [name]: value,
            }
        });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        await client.post("/", blogData).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
        alert("Your Blog has been created");
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
                            value={blogData.title}
                            placeholder='Enter your Blog Title'
                            onChange={handleChange}
                            required />

                    </div>
                    <div className="mb-6">
                        <label className="text-3xl block mb-2 text-sm font-medium text-gray-900 ">Image URL:</label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            name='image'
                            value={blogData.image}
                            placeholder='Enter your image url'
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-3xl mb-2 text-sm font-medium text-gray-900 ">Blog Description:</label>
                        <input
                            className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            name='description'
                            value={blogData.description}
                            placeholder='Enter your Blog Content'
                            onChange={handleChange}
                            required />
                    </div>
                    <button 
                    type="submit" 
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={handleSubmit}
                    >
                    <Link to="/">
                        Create
                    </Link>
                    </button>
                </form>
            </div>

            {/* <div>
            <h1>Title:</h1>
            <input 
             type="text"
             name="title" 
             value={blogData.title} 
             placeholder='Enter your Blog Title' 
             onChange={handleChange} 
             />

            <h1>Image:</h1>
            <input 
            type="text" 
            name='image' 
            value={blogData.image} 
            placeholder='Enter your image url' 
            onChange={handleChange}
             />

            <h1>Description</h1>
            <input 
            type="text" 
            name='description' 
            value={blogData.description} 
            placeholder='Enter your Blog Content'  
            onChange={handleChange}
            /> 
            <br />
            <button onClick={handleSubmit}>
                <Link to = "/">
                    Create Blog
                </Link>
            </button>
        </div> */}
        </>
    )
}

export default CreateBlog