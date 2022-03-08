import React from 'react'
import { Button } from "../../Button";
import  './SignUp.css';


function SignUp() {
  return (
    <React.Fragment>
        <div className='sign-up-container'>
      <section className='sign-up-subscription'>
        <p className='sign-up-subscription-heading'>
          Subscribe and join GOAL
        </p>
        <p className='sign-up-subscription-text'>
          unsubscribe at any time
        </p>
        <div className='sign-up-areas'>
          <form>
            <input
              className='sign-up-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <div className='password'>
            <input
              className='sign-up-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            
            </div>
            <Button buttonStyle='btn--outline'>Sign Up</Button>
          </form>

        </div>
        </section>
        </div>
      

    </React.Fragment>
  )
}

export default SignUp