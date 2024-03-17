import React from 'react';
import { Link } from 'react-router-dom';
import { FaBirthdayCake } from 'react-icons/fa'; 

const Home = () => {
  return (
    <div>
      <Link to='/'>
        <h1>Bienvenido a Happy Cake</h1>
        <h5>El lugar de los pasteles felices</h5>
        <FaBirthdayCake />
      </Link>
    </div>
  );
};

export default Home;


