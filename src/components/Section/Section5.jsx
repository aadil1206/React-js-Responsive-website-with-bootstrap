import React from 'react'
import a1 from './images/Frame 41.png'
import a2 from './images/Frame 42.png'
import a3 from './images/Frame 43.png'
import a4 from './images/Frame 44.png'
import a5 from './images/Frame 45.png'
import a6 from './images/Frame 41 (1).png'
import a7 from './images/Frame 42 (1).png'
import a8 from './images/Frame 43 (1).png'
import a9 from './images/Frame 44 (1).png'
import a10 from './images/Frame 45 (1).png'
import './Section5.css'

const Section5 = () => {
  return (
    <div className='row'>
      <div className=' col-12 d-flex justify-content-between x5'>
     <p className='x1 col'>Explore products from Premium Brands</p>
     <button className='x2'><p className='x3'>View All</p></button>
      </div>
      <div className='col-12 d-flex justify-content-between x7 flex-wrap'>
       <img src={a1} alt="" className='col-sm-2 x6'/>
       <img src={a2} alt="" className='col-sm-2 x6'/>
       <img src={a3} alt="" className='col-sm-2 x6'/>
       <img src={a4} alt="" className='col-sm-2 x6'/>
       <img src={a5} alt="" className='col-sm-2 x6'/>
       <img src={a6} alt="" className='col-sm-2 x6'/>
       <img src={a7} alt="" className='col-sm-2 x6'/>
       <img src={a8} alt="" className='col-sm-2 x6'/>
       <img src={a9} alt="" className='col-sm-2 x6'/>
       <img src={a10} alt="" className='col-sm-2 x6'/>
      </div>
 
    </div>
  )
}

export default Section5
