import { useEffect,useState } from "react";
import {colors} from '../style/global';
import { Link } from "react-router-dom";



const List=({pending})=>{
  
    const [blogs, setBlog]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:8000/blogs").then((res)=>res.json()).then((data)=>setBlog(data))
    },[pending])
    return (

<div style={{maxWidth:"48%",  display:"flex", flexDirection:"column",rowGap:"2rem",marginTop:"1rem "}}>


{
    blogs.map((blog)=>{
        return (
            <Link 
            key={blog.id}
            to={`/${blog.id}`}
            style={{display:"flex",alignItems:"flex-start",borderBottom:`1px solid ${colors.light}` ,textDecoration:"none", color:colors.light}}   >

            <div className="listImg" style={{
                display:"flex",
                alignItems:"center",
                width:"400px",
              
                height:"150px",
                 backgroundImage:`url("${blog.images}")`,
                overflow:"hidden",
                backgroundSize:"contain",
                backgroundRepeat:"no-repeat",
                marginRight:"1rem",
                marginBottom:"2rem"
            }}></div>

            <div style={{display:"flex" ,flexDirection:"column", marginLeft:"2rem", justifyContent:"center"}}>
            

                <h1>{blog.title}</h1>
                <p>{blog.description}</p>
            
            
            </div>
            
            
            </Link>

        )
    })
}



</div> 


    )
}
export default List