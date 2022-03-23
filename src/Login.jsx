//username:eve.holt@reqres.in  
import React,{useState}from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Login.css";


export default function Login(){
    const [username,setusername]=useState();
    const[password,setpassword]=useState();
    let navigate=useNavigate();
    function submitHandler(e){
        //e.preventDefault();
        const loginDetails = {
          email: username,
          password: password
        }
        
        axios.post('https://reqres.in/api/loginskk',loginDetails )
        .then(function (response) {
          console.log(response.data)
        }).catch((err) => {throw(err)

        })
      
        
       
      }
  return (
    <div>
        <div className="login-wrapper">
      
      <form>
        <label><h1>Please Log In</h1></label>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e)=>{setusername(e.target.value)}}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={(e)=>{setpassword(e.target.value)}}/>
        </label>
        <div>
          
          <button type="button" onClick={()=>{
            submitHandler();
            navigate("/Display");
          }}>Submit</button>
          
        </div>
      </form>
    </div>

    </div>
  )
}
