//Custom hook: a function to fetch the data

//useState hook makes values reactive (if it changes, it changes inside the component as well, i.e. React rerender the component)
//useEffect hook rerender components once data changes
import { useState, useEffect} from 'react';

//create a custom hook
const useFetch = (url) => {
  //useState hooks: set up states(initial values)
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => { //callback func runs after every render (with first uploading and when any data changes)
    const abortCont = new AbortController(); //stops fetching when user sends another request
    //a GET request to get the data from url using fetch method
    fetch(url, { signal: abortCont.signal }) //2nd argument -associates Abortcontroller with a specific fetch request
    .then(response => {
      if(!response.ok) { //if not getting response from server (response.ok = false)
        throw Error('could not fetch the data');
      }
      return response.json(); //gets response object using json method
    })
    .then(dataReturned => { //once data is uploaded:
      setData(dataReturned); //updates initial value
      setIsLoading(false); //stops showing loading message 
      setError(null); //stops error
    })
    .catch(err => {
      if(err.name === 'AbortError') { //aborting fetch err
        console.log('fetch aborted')
      }else {
        setIsLoading(false);
        setError(err.message);
      }
    })
    
    return () => abortCont.abort(); //stops fetching associated with specific fetch request
  }, [url]); //optional argument, empty arr calls the func with only first initial render, another dependency (url) triggers the func to run
  
  return { data, isLoading, error };
}

export default useFetch;