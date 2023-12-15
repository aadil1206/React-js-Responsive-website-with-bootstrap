import React from 'react'
import '../App.css'
import image1 from '../assets/29.svg'
import f30 from '../assets/30.svg'
import f12 from "../assets/Group.svg"
import z1 from "../assets/1.svg"
import z7 from "../assets/8.svg"
import z8 from "../assets/9.svg"
import z9 from "../assets/10.svg"
import z10 from "../assets/11.svg"
import z11 from "../assets/12.svg"
import z12 from "../assets/13.svg"
import z13 from "../assets/14.svg"
import z14 from "../assets/15.svg"
import z15 from "../assets/16.svg"
import z16 from "../assets/17.svg"
import z5 from "../assets/6.svg"
import z6 from "../assets/7.svg"  
import z2 from "../assets/2.svg"
import z3 from "../assets/3.svg"
import z4 from "../assets/4.svg"
const footer = () => {
  return (
    <footer class="row a1 bg-dark text-white">
    <footer1 class="row justify-content-between a3">
      <button
        class="a2 col d-flex align-items-center justify-content-center p-2"
      >
        <img
          src={image1}
          alt=""
          class="d-flex align-items-center a11"
        />Products
      </button>
      <button
        class="a2 col d-flex align-items-center justify-content-center p-2"
      >
        <img
          src={f30}
          alt=""
          class="d-flex align-items-center a11"
        />Services
      </button>
    </footer1>
    <footer2 class="row py-4 justify-content-between align-items-center a4">
      <div class="col-sm-2">
        <img src={f12} alt="" />
      </div>
      <div class="col-sm-5 text-white d-flex justify-content-around a5">
        <a href="#">View All Categories</a>
        <a href="#">Popular Search</a>
        <a href="#">View All Brands</a>
      </div>
    </footer2>
    <footer3 class="row py-4 justify-content-between a7">
      <div class="row d-flex">
        <div class="col">
          <p class="a6">Company</p>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Career</li>
            <li>Who to Join with us ?</li>
            <li>special offers</li>
            <li>Articles &</li>
          </ul>
        </div>
        <div class="col mx-4">
          <p class="a6">Legal</p>
          <ul>
            <li>Privacy policy</li>
            <li>Terms & Conditions</li>
            <li>Cancellation and return policy</li>
            <li>Who to Join with us ?</li>
            <li>FAQ'S</li>
          </ul>
        </div>
        <div class="col mx-3">
          <p class="a6">Let's Connect With Us</p>
          <div>
            <img src={z1} alt="" />
            <img src={z2} alt="" />
            <img src={z3} alt="" />
            <img src={z4} alt="" />
          </div>
        </div>
        <div class="col d-flex flex-column">
          <p class="a6">Subscribe's To NewsLetter</p>
          <div class="input-group mb-3 mc3">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Your Email"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button class="btn b1" type="button" id="button-addon2">
              Send
            </button>
          </div>
          <p class="a6">Have a Question or want to place an Order?</p>
          <img src={z5} alt="" />
        </div>
      </div>
    </footer3>
    <footer4 class="row py-5 justify-content-center a9">
      <img src={z6} alt="" class="col-1 a10" />
      <img src={z7} alt="" class="col-1 a10" />
      <img src={z8} alt="" class="col-1 a10" />
      <img src={z9} alt="" class="col-1 a10" />
      <img src={z10} alt="" class="col-1 a10" />
      <img src={z11} alt="" class="col-1 a10" />
      <img src={z12} alt="" class="col-1 a10" />
      <img src={z13} alt="" class="col-1 a10" />
      <img src={z14} alt="" class="col-1 a10" />
      <img src={z15} alt="" class="col-1 a10" />
    </footer4>
    <footer5 class="d-flex justify-content-between p-3">
      <p class="col">© All Reserve to MVENTUS</p>
      <img
        src={z16}
        alt=""
        class="c1 d-flex justify-content-end"
      />
    </footer5>
  </footer>
  )
}

export default footer
