import React from 'react';
import PrivcyPolicy from './Pages/PrivcyPolicy'


import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';



const App = () => {
  return <>
  <Router>
  <Routes>
  <Route path='/PrivcyPolicy' element={ <PrivcyPolicy/>}></Route>
  </Routes>
  </Router>
  </>;
};

export default App;

