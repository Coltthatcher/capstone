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
          <div className="footer-link-links">
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className="socials">
        <div className="social-wrap">
          <div className="footer-logo">
            <Link to='/' className="social-logo">
              <MdDirectionsRun className="navbar-icon" />
              GOAL
            </Link> 
          </div>
          <small className="rights">GOAL @ 2022</small>
          <div className="social-icons">
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
            <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
            <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
            <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
      
      
  );
}

export default Footer;