//Create component -creates new blog

import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

  //useState states initial values into template (as an array or null)
  const [title, setTitle] = useState(''); 
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory(); //back&forward arrows in browser and redirecting user

  const handleSubmit = event => { //on submit button
    event.preventDefault();
    const blog = { title, body, author}; //creates a blog object

    setIsLoading(true); //when loading a blog

    fetch('http://localhost:8000/blogs', { //creates a post request to add a new blog to the db
      method:'POST',
      headers: { "Content-Type": "application/json" }, //type of content we sending
      body: JSON.stringify(blog) //blog object in json format
    }).then(() => {
      setIsLoading(false); //when blog is added
      //history.go(-1); //goes one page back(-1) or forward(1)
      history.push('/') //redirects user to home page
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title} //associates the value of title with input field
          onChange={(event) => setTitle(event.target.value)} //updates state of title when we change title input value
        />
        <label>Blog body:</label>
        <textarea
        required
        value={body} 
        onChange={(event) => setBody(event.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author} 
          onChange={(event) => setAuthor(event.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        { !isLoading && <button>Add Blog</button> } {/*initial value */}
        { isLoading && <button>Blog is adding...</button> } {/*when new blod is submitted */}
        
      </form>
    </div>
   );
}
 
export default Create;