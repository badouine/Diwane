import React, { useState, useEffect } from 'react';
import Routes from './components/Routes';
import { UidContext } from "./components/AppContext";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { getUser } from './actions/user.action';

const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch()
  useEffect(() =>{
    const fetchToken = async () => {
      await axios({
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true
      })
      .then((res) => {
        console.log(res);
        setUid(res.data);
      })
      .catch((err) => console.log('No Token'));
    };
    fetchToken();

    if(uid) dispatch(getUser(uid))
  }, [dispatch, uid]);

  
  return (
    <UidContext.Provider value={uid} >
      <Routes/>
    </UidContext.Provider>
    
  )
}

export default App;
