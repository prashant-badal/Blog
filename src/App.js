import Layout from "./component/Layout";
import NavBar from "./component/NavBar";
import Blog from "./component/Blog";
import List from "./component/List";
import Heading from "./component/Heading";
import Create from "./component/Create";
import {main} from './style/homeStyle';
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
const App=() => {
  const [pending ,setPending]=useState(false);
  return (
<Layout>

    <NavBar/>

    <hr style={{marginTop:"3rem",color:"black" ,size:"2px"}}/>

    <Heading/>

<hr style={{marginTop:"3rem",color:"black" ,size:"2px"}}/>



 
    <div style={main}>
    <Routes>
    <Route path="/" element={<Blog  pending={pending} setPending={setPending}/>}/>
    <Route path="/create" element={<Create pending={pending} setPending={setPending}/>}/> 
    <Route path="/:id" element={<Blog pending={pending} setPending={setPending}/>}/>
    
    </Routes>

  

    <List  pending={pending} setPending={setPending}
/>
   

    </div>


</Layout>

  );
}

export default App;
