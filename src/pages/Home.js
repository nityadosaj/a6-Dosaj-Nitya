import React, { useEffect, useState } from 'react';
import Posts from '../components/Posts';
import axios from 'axios';

function Home() {
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  useEffect( () => {
    setAppState({ loading: true });
    async function fetchData()
    {
      const apiURL = 'https://jsonplaceholder.typicode.com/posts';
      const res = await axios.get(apiURL);
      setAppState({ loading: false, posts: res.data.slice(0,5)} );
    }
    fetchData();
  }, [setAppState]);

  //Site URL: https://practical-lewin-db729e.netlify.app
  return (
      <Posts isLoading={appState.loading} posts={appState.posts}/>
  );

}
export default Home;
