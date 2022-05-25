import React from 'react';
import { useState } from 'react/cjs/react.production.min';

import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>{setemail(e.target.value)}}
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"

            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
