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
            <div>
                {itemData.title}
                <br />
                {itemData.image}
                <br />
                {itemData.description}
                <br />
                <button>
                    <Link to="/Update" state={itemData}>
                        Update
                    </Link>
                </button>
                <br />
                <button onClick={handleDelete}>Delete</button>
            </div>

        </>
    )
}

export default Blog