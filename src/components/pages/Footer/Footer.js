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



function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-heading">
          Join us and get on your goals
        </p>
        <p className='footer-subscription-text'>
          unsubscribe at anytime
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name='email'
              type='email'
              placeholder="Your Email"
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Footer