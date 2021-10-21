//Creates Navbar component

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My blog</h1>
      <div className="links">
        <Link to="/">Home</Link> {/* links to a component instead of sending request to server */}
        <Link to="/create" style={{ //styles 'New blog' red button: passes a js object {} with key-value pairs as dynamic value {}
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }}>New blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;