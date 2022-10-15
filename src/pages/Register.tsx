import React from 'react'
import RegisterHero from '../components/RegisterHero';
import Designers from '../components/Designerss';
import YourBenefits from '../components/YourBenefits';
import FAQ from '../components/FAQ';

const Register = () => {

  return (
    <>
      <RegisterHero />
      <YourBenefits />
      <Designers titleVisible={true} />
      <FAQ />
    </>
  )
};

export default Register