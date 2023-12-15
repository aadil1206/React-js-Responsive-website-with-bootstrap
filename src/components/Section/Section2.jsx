import React from 'react'
import fra from './images/Frame 33775.png'
import right from './images/arrow-right.svg'


const Section2 = () => {
  return (
    <div className='row x25'>
      <p className='x20'>Explore Our Services</p>
      <div className='row bg-white justify-content-between'>
      <div className='x21 col-sm-3'>
        <img src={fra} alt="" style={{marginBottom:'14px'}}/>
        <div className='col mb-4'>
          <p className='x22'>Calibration</p>
          <p className='x23'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className='col d-flex justify-content-between'>
            <p className='x24'>View More</p>
            <img src={right} alt="" style={{width:'20px',height:'20px'}}/>
        </div>
      </div>
      <div className='x21 col-sm-3'>
        <img src={fra} alt="" style={{marginBottom:'14px'}}/>
        <div className='col mb-4'>
          <p className='x22'>Engineering & Consultancy</p>
          <p className='x23'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className='col d-flex justify-content-between'>
            <p className='x24'>View More</p>
            <img src={right} alt="" style={{width:'20px',height:'20px'}}/>
        </div>
      </div>
      <div className='x21 col-sm-3'>
        <img src={fra} alt="" style={{marginBottom:'14px'}}/>
        <div className='col mb-4'>
          <p className='x22'>Industry 4IR</p>
          <p className='x23'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className='col d-flex justify-content-between'>
            <p className='x24'>View More</p>
            <img src={right} alt="" style={{width:'20px',height:'20px'}}/>
        </div>
      </div>
      <div className='x21 col-sm-3'>
        <img src={fra} alt="" style={{marginBottom:'14px'}}/>
        <div className='col mb-4'>
          <p className='x22'>Maintenance</p>
          <p className='x23'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className='col d-flex justify-content-between'>
            <p className='x24'>View More</p>
            <img src={right} alt="" style={{width:'20px',height:'20px'}}/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Section2

