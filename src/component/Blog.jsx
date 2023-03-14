import {useState,useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Blog=({setPending})=>{
    const [Blog ,setBlog]=useState({});
    const {id}=useParams();
    const navigatio= useNavigate();
     

    useEffect(()=>{
        fetch(`http://localhost:8000/blogs/${ id ? id : 1}`).then((res)=>res.json())
        .then((data)=>setBlog(data));
           setPending(false)
    },[id]);

    //  useEffect(()=>{
    //     fetch(`http://localhost:8000/blogs/1`).then((res)=>res.json())
    //     .then((data)=>setBlog(data));
    //     setPending(false)
    // },[]);

const deleteHandler=()=>{
    fetch(`http://localhost:8000/blogs/${id}`,{
        method:"DELETE",
    }).then(()=> {
         setPending(true);
        navigatio('/');
    }


      
    )
}
    return (
<>
{
   id ?(
<div className="bloContainer" style={{marginTop:"1rem",
    width:"48%",

}}>
<img src={Blog.images} alt="jhg" />
<h1>{Blog.title}</h1>
<p>{Blog.description}</p>
<button onClick={deleteHandler}>Delete</button>

 
</div>
   ):(
    <div className="bloContainer" style={{marginTop:"1rem",
    width:"48%",

}}>
<img src={Blog.images} alt="2nd" />
<h1>{Blog.title}</h1>
<p>{Blog.description}</p>





</div>
   )
    
}


</>



    );
};
export default Blog