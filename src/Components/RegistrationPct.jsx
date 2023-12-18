import React, { useState } from 'react'

const RegistrationPct = () => {

    const [name,setName] = useState([]);
    const [email,setEmail] = useState([]);
    const [password,setPassword] = useState([]);

    const handleform = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
    }

  return (
    <>
    <form onSubmit={handleform}>
        <label htmlFor="username">UserName</label>
        <br />
        <input 
        type="text" 
        id='username'
        name='username'
        /> <br />
        <label htmlFor="email">Email</label>
        <br />
        <input 
        type="email"
        id='email'
        name='email'
        /> <br />
        <label htmlFor="password">Password</label> <br />
        <input 
        type="text" 
        id='password'
        name='password'
        />
        <br /> <br />
        <button>Submit</button>
    </form>
    </>
  )
}

export default RegistrationPct