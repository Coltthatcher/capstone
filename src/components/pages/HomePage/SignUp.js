import React from 'react'
import { Button } from "../../Button";
import  './SignUp.css';
import { MdDirectionsRun } from "react-icons/md";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from './firebase-config'
import { useState } from "react";



function SignUp() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
    const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword )
    console.log(user)
    } catch (error) {
    console.log(error.message);
  }
};


  return (
    <React.Fragment>
        <div className='sign-up-container'>
      <section className='sign-up-subscription'>
        <p className='sign-up-subscription-heading'>
          Join GOAL
          <MdDirectionsRun className="navbar-icon" />
        </p>
        <div className='sign-up-areas'>
          <form>
            <input
              className='sign-up-input'
              name='email'
              type='email'
              placeholder='Your Email' onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            />
            <div className='password'>
            <input
              className='sign-up-input'
              name='password'
              type='password'
              placeholder='Password' onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
            </div>
            <div className='password'>
            <input
              className='sign-up-input'
              name='password'
              type='password'
              placeholder='Confirm Password' onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
            </div>
            <Button onClick={register} buttonStyle='btn--outline'>Sign Up</Button>
          </form>
        </div>
        </section>
        </div>
      

    </React.Fragment>
  )
}

export default SignUp