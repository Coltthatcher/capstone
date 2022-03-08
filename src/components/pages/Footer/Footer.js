import React from "react";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdDirectionsRun } from "react-icons/md";
import './Footer.css';



function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Subscribe and join GOAL
        </p>
        <p className='footer-subscription-text'>
          unsubscribe at any time
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-links">
          <h2>About Goal</h2>
            <Link to='/sign-up'>Get Started</Link>
            <Link to='/'>Our Story</Link>
            <Link to='/'>How To Get Involved</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className="footer-link-links">
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
          </div>
        </div>
      </div>
    </div>
      
      
  );
}

export default Footer;