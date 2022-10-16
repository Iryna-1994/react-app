import React from 'react'
import LoginForm from './LoginForm';

const Hero = () => {

  return (
    <section className='hero-section'>
      <div className='hero-container'>
        <div className='hero-left' />
        <div className='hero-right'>
          <LoginForm />
        </div>
      </div>
    </section>
  )
};

export default Hero