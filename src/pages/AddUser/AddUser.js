import React,{useState} from 'react';
import {useNavigate} from "react-router-dom";


function AddUser() {
    const navigate = useNavigate();
    const [user,newUser] = useState({
        name: '',
        username: '',
        email: '',
    })

    const {name,username,email} = user

  const handleOnchange = (e)=>{
        newUser({...user,[e.target.name]:e.target.value})
    }

  const  handleSubmit = async (e) => {
      e.preventDefault()
      try{
      const userUrl = `http://localhost:3004/users`;
  await fetch(userUrl,{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body:  JSON.stringify({
            name: name,
            username: username,
            email: email,
        })
      })
   navigate("/statistic")
    }catch(e){
        console.warn("You have internal Error",e)
    }
    }
  return (
    <div className="row">
    <div className="col-12">
        <form className="w-50 mx-auto border p-3 my-5" onSubmit={handleSubmit}>
        <h2 className="text-center m-0">Update User info</h2>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" name="name" value={name} className="form-control" id="name" onChange={handleOnchange}/>
            </div>
            <div className="mb-3">
            <label htmlFor="username" className="form-label">User Name</label>
                <input type="text" value={username} onChange={handleOnchange} name="username" className="form-control" id="username"/>
            </div>
            <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
                <input type="text" name="email" value={email} className="form-control" id="email" onChange={handleOnchange}/>
            </div>
            <div className="d-flex">
            <button type="submit" className="btn btn-primary w-100 rounded-pill">Add User</button>
            </div>
        </form>
    </div>
</div>
  )
}
export default AddUser
