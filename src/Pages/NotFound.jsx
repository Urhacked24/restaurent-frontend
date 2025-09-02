import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';


const NotFound = () => {
  return (
    <>
    <section className='not-found'>
      <div className="container">
        <img src="/notFound.svg" alt="notFound" />
        <h1>LOOKS LIKE YOU'RE LOST</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to={"/"}>Back to Home {" "} <span><HiOutlineArrowRight /></span></Link>
      </div>
    </section>
    
    </>
  )
}

export default NotFound
