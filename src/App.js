import React from  'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Home from './component/Home'
import Menu from './component/Menu';
import Track from './component/Track';
import Pnf from './component/Pnf';


function App() {
  return (
   <BrowserRouter>
   {/* <h1>Music Player</h1> */}
     <Menu/>
     <ToastContainer autoClose={5000} position={"top-right"}/>
     <Routes>
      <Route path={'/'} element={ <Home/> } />
      <Route path={'/home'} element={ <Home/> } />
      <Route path={"track/:id"} element={<Track/>}/>
      <Route path={"/*"} element={<Pnf/>}/>
     </Routes>

   </BrowserRouter>

  );
}

export default App;
