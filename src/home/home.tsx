import React, { useEffect } from 'react';

const Home = () => {
  const url = window.location.pathname;

  useEffect(() => {
    if (url === '/') {
      window.location.href = '/home';
    }
  }, []);

  return <h1>Área site</h1>;
};

export default Home;
