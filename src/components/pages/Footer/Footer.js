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
      </div>
      
  );
}

export default Footer;