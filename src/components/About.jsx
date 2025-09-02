import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">About Us</h1>
                    <p className="subheading">We are committed to delivering the best culinary experience.</p>
                </div>
                <p className='mid'>Our team of expert chefs use only the finest ingredients to create mouthwatering dishes that will delight your taste buds.</p>
                <Link to={"/"}>Explore Menu {" "}
                <span><HiOutlineArrowNarrowRight /></span></Link>

            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>

    </section>
  )
}

export default About
