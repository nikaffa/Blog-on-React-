//Blog details component

import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams(); //specific blog id
  const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id); //takes the data (blog with specific id)
  const history = useHistory(); //redirects user

  const handleDelete = () => {
    //fetch delete request to json server to delete a single blog
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/'); //redirects to home page
    })
  }
  return ( 
    <div className="blog-details">
      { isLoading && <div>Loading...</div> }
      { error && <div> { error }</div> }
      { blog && ( //retrieves data from db.json (blog)
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;