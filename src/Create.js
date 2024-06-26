import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { addUser } from './UserReducer'
import { useDispatch,useSelector } from 'react-redux'


function Create() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const users =useSelector((state)=> state.users);
  const dispatch =useDispatch();
  const navigate =useNavigate()

  const handleSubmit=(event)=>{
    event.preventDefault();
    dispatch(addUser({id: users[users.length - 1].id+1, name,email}))
    navigate('/')

  }


  return (
   <div className='d-flex w-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>
      <h1>Add new User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' className='form-control' placeholder='enter name'  onChange={e=> setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' className='form-control' placeholder='enter email' onChange={e=> setEmail(e.target.value)}/>
        </div><br />
        <button className='btb btn-info'>Submit</button>
      </form>
    </div>
   </div>
  )
}

export default Create
