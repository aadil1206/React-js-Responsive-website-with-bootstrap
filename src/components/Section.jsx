import React from 'react'
import Section5 from './Section/Section5'
import Section1 from './Section/Section1'
import Section2 from './Section/Section2'
import Section3 from './Section/Section3'
import Section4 from './Section/Section4'

const Section = () => {
  return (
    <div className='x4'>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
      <Section5/>
    </div>
  )
}

export default Section
