import React from 'react';



import { AppRouter } from './routers/AppRouter';

const App = () => {
  console.log(process.env.REACT_APP_ENV)
  return (

        <AppRouter />

  );
};

export default App;