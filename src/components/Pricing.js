import React from 'react'
import { Link } from 'react-router-dom'
import { BsFlower3 } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import { Button } from './Button';
import './Pricing.css';

function Pricing() {
  return (
    <div>
      <div className='price_section'>
        <div className='price_wrapper'>
          <h1 className='price_heading'>Subscription Tiers</h1>
          <div className='price_container'>
            <Link to='/sign-up' className='pricing-container-sheet'>
              <div className='price_container-info'>
                <div className='icon'>
                  <BsFlower3 />
                </div>
                <h3>Standard</h3>
                <h4>$10.99</h4>
                <p>per month</p>
                <ul className='container-tiers'>
                  <li>Thousands of workouts</li>
                  <li>Create Personalized Plans</li>
                  <li>Integrated Music match</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Standard
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing-container-sheet'>
              <div className='price_container-info'>
                <div className='icon'>
                  <BsFlower3 />
                </div>
                <h3>Standard</h3>
                <h4>$10.99</h4>
                <p>per month</p>
                <ul className='container-tiers'>
                  <li>Thousands of workouts</li>
                  <li>Create Personalized Plans</li>
                  <li>Integrated Music match</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Standard
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing