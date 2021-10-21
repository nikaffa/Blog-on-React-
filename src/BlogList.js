//Creates BlogList component

import { Link } from "react-router-dom";

// props object { blogs, title} retrieves properties from Home component and saves them to vars (by destructing) to use here
// where blogs = props.blogs, title = props.title
const BlogList = ({ blogs, title}) => { 
  return (
    <div className="blog-list">
      <h2>{ title }</h2> 
      {blogs.map(blog => ( //maps through the data with an id and output for each item a template with title & author
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}> {/* links to blog with specific id */}
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p> 
          </Link> 
        </div> 
      ))}
    </div>
  );
}
 
export default BlogList;