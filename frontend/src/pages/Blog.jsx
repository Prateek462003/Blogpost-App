import { Link, useLocation } from 'react-router-dom';
import { client } from '../clientMethods';


const Blog = () => {
    const location = useLocation();
    const itemData = location.state;

    const handleDelete = async (e) => {
        e.preventDefault();
        await client.delete(`/${itemData._id}`).catch(err => {
            console.log(err);
        });
        alert("Blog has been deleted");
    }
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-semibold'>
                    {itemData.title}:
                </h1>
                <br />
                <div className='w-1/4 h-1/2' m-auto>
                    <img className="contain"src={itemData.image} alt="" />
                </div>
                <br />
                <p className="text-3xl font-medium">
                    {itemData.description}
                </p>
                <br />
                <div className='flex'>
                    <button className="mr-4 mt-3 m-3bg-transparent hover:bg-blue-950 text-blue-700 font-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        <Link to="/Update" state={itemData}>
                            Update
                        </Link>
                    </button>
                    <br />
                    <button className="mt-3 bg-transparent hover:bg-blue-950 text-blue-700 font-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={handleDelete}>Delete</button>
                </div>
            </div>

        </>
    )
}

export default Blog