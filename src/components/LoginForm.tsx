import React from 'react'
import { NavLink } from "react-router-dom"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Title from './Title';
import Line from './Line';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const LoginForm = () => {

  return (
    <div className='login-form-box'>
      <Title
        textAlign="center"
        textColor="black"
        fontSize="30px"
        fontWeight="600"
        content="Login"
      />
      <br />
      <Line
        bgColor="black"
        justifyContent="center"
      />
      <form className='login-form'>
        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} />
        <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} />
        <Button variant="contained" size="large" fullWidth={true}>Login</Button>
        <NavLink to="/forgot-your-password" className="form-link">
          <span className='forgot-password'>Forgot your password?</span>
          <NavigateNextIcon />
        </NavLink>
      </form>
    </div>
  )
};

export default LoginForm