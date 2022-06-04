import React from 'react';
import LeftNav from '../../components/LeftNav';
import Thread from '../Thread';

const Home = () => {
    return (
        <div className="home"> 
          <LeftNav/> 
          <div className="main"> 
            <Thread/>
          </div>
        </div>
    );
};

export default Home;