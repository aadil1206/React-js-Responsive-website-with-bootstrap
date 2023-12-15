import React from 'react'
import z19 from "../assets/19.png"
import z20 from "../assets/search.svg"
import z21 from "../assets/25.svg"
import z22 from "../assets/27.svg"
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="row" style={{backgroundColor: "black"}}>
      <div className="row py-2 justify-content-between align-items-center c4">
        <div
          className="col-6 d-flex px-3 justify-content-between align-items-center c7"
        >
          <img src={z19} alt="" className="c5" />
          <div className="dropdown ">
              <button className="btn btn-secondary dropdown-toggle border-0" type="button" id="dropdownMenu2"
                style={{backgroundcolor: '#000000'}} data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><button className="dropdown-item" type="button">Abrasives</button></li>
                <li><button className="dropdown-item" type="button">Adhesives, Sealants and Tape</button></li>
                <li><button className="dropdown-item" type="button">Agriculture, garden and landscaping</button></li>
                <li><button className="dropdown-item" type="button">Bearings</button></li>
                <li><button className="dropdown-item" type="button">Cleaning & Hygienias</button></li>
                <li><button className="dropdown-item" type="button">Cables & accessories</button></li>
                <li><button className="dropdown-item" type="button">Electrical</button></li>
                <li><button className="dropdown-item" type="button">Electronics & Batteries</button></li>
                <li><button className="dropdown-item" type="button">Fasteners</button></li>
                <li><button className="dropdown-item" type="button">Fire Fighting</button></li>
                <li><button className="dropdown-item" type="button">Fleet & Vehicle Maintenance</button></li>
                <li><button className="dropdown-item" type="button">Furnishings, Appliances & Hospitality</button></li>
                <li><button className="dropdown-item" type="button">HVAC and Refrigeration</button></li>
                <li><button className="dropdown-item" type="button">Hardware</button></li>
                <li><button className="dropdown-item" type="button">Hydraulics</button></li>
                <li><button className="dropdown-item" type="button">Lab Supplies</button></li>
                <li><button className="dropdown-item" type="button">Lighting</button></li>
                <li><button className="dropdown-item" type="button">Lubrication</button></li>
                <li><button className="dropdown-item" type="button">Machinery & Machining</button></li>
                <li><button className="dropdown-item" type="button">Material Handling</button></li>
                <li><button className="dropdown-item" type="button">Motors</button></li>
                <li><button className="dropdown-item" type="button">Office Supplies</button></li>
                <li><button className="dropdown-item" type="button">Outdoor Equipment</button></li>
                <li><button className="dropdown-item" type="button">Packaging & Shipping</button></li>
                <li><button className="dropdown-item" type="button">Points, Equipment and Supplies</button></li>
                <li><button className="dropdown-item" type="button">Pipes, fittings, flanges and accessories</button></li>
                <li><button className="dropdown-item" type="button">Plumbing</button></li>
                <li><button className="dropdown-item" type="button">Pneumatics</button></li>
                <li><button className="dropdown-item" type="button">Power Transmission</button></li>
                <li><button className="dropdown-item" type="button">Pumps</button></li>
                <li><button className="dropdown-item" type="button">Raw Materials</button></li>
                <li><button className="dropdown-item" type="button">Safety</button></li>
                <li><button className="dropdown-item" type="button">Security</button></li>
                <li><button className="dropdown-item" type="button">Renewable Energy</button></li>
                <li><button className="dropdown-item" type="button">Testing & Measuring instruments</button></li>
                <li><button className="dropdown-item" type="button">Tools</button></li>
                <li><button className="dropdown-item" type="button">Valves</button></li>
                <li><button className="dropdown-item" type="button">Welding</button></li>
              </ul>
            </div>
            <div className="dropdown" style={{marginleft :'40px'}}>
            <button className="btn btn-secondary dropdown-toggle border-0" type="button" id="dropdownMenu2"
              data-bs-toggle="dropdown" style={{backgroundcolor:'#000000'}} aria-expanded="false">
              Service
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li><button className="dropdown-item" type="button">Service</button></li>
              <li><button className="dropdown-item" type="button">About us</button></li>
              <li><button className="dropdown-item" type="button">Contact Us</button></li>
              <li><button className="dropdown-item" type="button">Caliberation</button></li>
              <li><button className="dropdown-item" type="button">Engineering & Consultancy</button></li>
              <li><button className="dropdown-item" type="button">Industry 4IR</button></li>
              <li><button className="dropdown-item" type="button">Maintenance</button></li>
              <li><button className="dropdown-item" type="button">MRO Supplies</button></li>
            </ul>
          </div>
          <a href="" className="c9">About us</a>
          <a href="" className="c8">Contact us</a>
        </div>
        <div className="col d-flex justify-content-end px-2 c91">
          <button className="c3">Login/Register</button>
        </div>
      </div>
      <div className="row py-3 px-5 justify-content-between c11">
        <div className="input-group mb-3 mb3">
          <button
            className="btn btn-outline-secondary dropdown-toggle b1"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            All Categories
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Separated link</a></li>
          </ul>
          <input
            type="text"
            className="form-control e1"
            aria-label="Text input with dropdown button"
            placeholder="Search Products"
            
          />
          <span className="input-group-text bg-white border none" id="basic-addon1"
            ><img src={z20} alt=""
          /></span>
        </div>

        <div
          className="col-4 d-flex text-white align-items-center justify-content-end c12"
        >
          <div className="d-flex align-items-center mx-2">
            <img
              src={z21}
              alt=""
              className="d-flex align-items-center"
            />
            <p className="y1">Your Cart</p>
          </div>
          <div className="d-flex align-items-center mx-2">
            <img
              src={z22}
              alt=""
              className="d-flex align-items-center"
            />
            <p className='y1'>Wishlist</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
