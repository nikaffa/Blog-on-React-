//Creates App Component as a root component, which sets at the top of application and rendered inside html file

import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

//for vers.React less than 17 it must be imported first:
//import React from 'react';

function App() { 
  return ( //returns JSX template
    //wrap app component into Router so all other components inside App can access Router
    //all routes run inside Switch component, creates single route for each page
    <Router> 
      <div className="App">
        <Navbar />
        <div className="content">
           <Switch> {/*contains all routes for different pages, shows only one route at a time */}
            <Route exact path='/'> {/*a route for the home page, 'exact' looks for strict matching  */}
              <Home /> {/*shows home component as content */}
            </Route>
            <Route path='/create'> 
              <Create /> 
            </Route>
            <Route path='/blogs/:id'> {/* dynamic id of a specific blog */}
              <BlogDetails /> 
            </Route>
            <Route path='*'> {/* any other route that doesn't exist (must be at the bottom)*/}
              <NotFound /> 
            </Route>

          </Switch>
        </div>
      </div>
    </Router> 
  );
}

export default App; //exports component func to use in other files
