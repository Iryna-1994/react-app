import React from 'react'
import RegisterForm from './RegisterForm';

const RegisterHero = () => {

  return (
    <section className='register-hero-section'>
      <div className='register-hero-container'>
        <div className='register-hero-left' />
        <div className='register-hero-right'>
          <RegisterForm />
        </div>
      </div>
    </section>
  )
};

export default RegisterHero