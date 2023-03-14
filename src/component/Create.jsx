
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../style/global";
const Create =({pending,setPending}) => {
    const [title,setTitle]=useState("");
     const [body,setBody]=useState("");
    const [images,setImg]=useState("");
    const [author, setAuthor]=useState("author1");
    const navigatio= useNavigate();
   

    const submitHandle=(e)=>{
        e.preventDefault();

        const newVlog={
            title,
            author,
            body,
            images,
            description:"jkhgv"
        };
         console.log("submitt")

        fetch("http://localhost:8000/blogs",{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(newVlog),
        }).then(()=>{
           setPending(true)
        navigatio('/');
        })
         console.log(newVlog)
    };
  return (
   <div className="formContainer" style={{width:"50%",display:"flex",flexDirection:"column",
   alignItems:"center"}}>

   <h1>Create the Form</h1>


   <form onSubmit={submitHandle}
    style={{display:"flex",flexDirection:"column", rowGap:"0.5rem",width:"100%",justifyContent:"center"}}>

   <label>Title</label>
   <input type="text" required value={title}   onChange={(e)=>setTitle(e.target.value)} />

   <label >body</label>
   <textarea  value={body}  required  onChange={(e)=>setBody(e.target.value)} />

   <label >Link for input</label>
   <input  required type="text" value={images}   onChange={(e)=>setImg(e.target.value)} />

   <select value={author}   onChange={(e)=>setAuthor(e.target.value)} >
    <option value="auther1">Auther1</option>
    <option value="auther2">Auther2</option>
    <option value="auther3">Auther3</option>
    <option value="auther4">Auther4</option>
   </select>

   <input type="submit"  style={{backgroundColor:colors.logon, color:colors.light,cursor:"pointer",boxShadow:` 5px 5px 5px 0px ${colors.text} `}}/>
   
   </form>
   
   
   </div>
  )
}

export default Create