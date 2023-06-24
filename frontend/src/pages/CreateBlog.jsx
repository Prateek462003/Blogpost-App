import React, { useState } from 'react'
import { client } from '../clientMethods';
import { Link } from 'react-router-dom';

const CreateBlog = () => {
    const [blogData, setBlogData] = useState({
        title:"",
        image:"",
        description:"",
    });

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setBlogData(previousData=>{
            return {
                ...previousData,
                [name]: value,
            }
        });
    }


    const handleSubmit = async(e) =>{
        e.preventDefault();
        await client.post("/", blogData).then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        });
        alert("Your Blog has been created");
    }

    return (
    <>
        <div>
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
        </div>
    </>
  )
}

export default CreateBlog