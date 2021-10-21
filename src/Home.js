//Creates Home component

import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => { 
  //gets the values using fetch
  const { data, isLoading, error } = useFetch('http://localhost:8000/blogs') 
  
  //render them to the DOM
  return ( 
    <div className="home">
      { error && <div>{ error }</div>} {/*only when we have an error, output it*/}
      { isLoading && <div>Loading...</div>} {/* only when the loading is true, shows a message */}
      { data && <BlogList blogs={data} title='All Blogs'/>} {/* reneders data to the DOM only if blogs=true (when state is updated with blogs) */}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs"/> */} { /* using filter method to search blogs */} 
    </div>
  );
}
 
export default Home;