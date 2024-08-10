import React from 'react';
import  ReactDOM  from 'react-dom';
import './index.css';
import Open from './open';
import Login from './login';
import Home from './home';
import Artist from './artist';
import Blog from './blog';
import Painting from './painting';
import Profile from './profile';
import Ahome from './ahome';
import Aitem from './aitem';
import Aprofile from './aprofile';
import Aartist from './aartist';
import Ashopping from './order';
import Admin from './aadmin';
import Team from './team';
import Shopping from './shopping';
import Contactus from './contactus';
import EmailForm from './emailform';


import{BrowserRouter, Routes, Route} from 'react-router-dom';


function Website(){
  return(
    <BrowserRouter>
      <Routes>

        {/* customer */}

        <Route path = "/" element={<Open/>}></Route>
        <Route path = "/login" element = {<Login/>}></Route>
        <Route path = "/home"  element = {<Home/>}></Route>
        <Route path = "/artist" element = {<Artist/>}></Route>
        <Route path = "/blog" element = {<Blog/>}></Route>
        <Route path = "/painting" element = {<Painting/>}></Route>
        <Route path = "/profile" element = {<Profile/>}></Route>
        <Route path = "/team" element = {<Team/>}></Route>
        <Route path = "/shopping" element = {<Shopping/>}></Route>
        <Route path = "/contactus" element ={<Contactus/>}></Route>

{/* AGO */}

        <Route path = "/ahome" element = {<Ahome/>}></Route>
        <Route path = "/aitem" element = {<Aitem/>}></Route>
        <Route path = "/aprofile" element = {<Aprofile/>}></Route>
        <Route path = "/aartist" element = {<Aartist/>}></Route>
        <Route path = "/order" element = {<Ashopping/>}></Route>

{/* admin */}
        <Route path = "/aadmin" element = {<Admin/>}></Route>
        <Route path = "/emailform" element = {<EmailForm/>}></Route>


      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<Website/>,document.getElementById('root'));