import React from "react";
import hero from "./images/Hero Image.jpg";
import ag from "./images/ag.png";
import pdm from './images/pdm.png'
import mhp from './images/mhp.png'
import os from './images/os.png'
import hs from './images/hs.png'
import el from './images/Electrical.png'
import lcr from './images/lcr.png'
import fnr from './images/fnr.png'
import br from './images/br.png'
import cln from './images/cln.png'
import lpr from './images/lpr.png'
import tt from './images/tt.png'
import hpu from './images/hpu.png'
import cube from './images/3dcube.png'
import crown from './images/crown.png'
import cal from './images/calendar.png'
import note from './images/note.png'


const Section1 = () => {
  return (
    <div className="row">
      <img src={hero} alt="" className="img-fluid mb-5" />
      <div className="row">
        <div className="row d-flex justify-content-between">
          <p className="x7 col">Our Product Category</p>
          <a className="x8 col d-flex justify-content-end " href="#">
            View All Products
          </a>
        </div>
        <div className="col-12 d-flex flex-wrap mb-5">
          <div className="d-flex justify-content-center flex-column col-2 align-items-center x12">
            <img
              src={ag}
              alt=""
              style={{ width: "40px", height: "40px", margin: "1rem 0rem" }}
            />
            <p className="x11">Agriculture</p>
          </div>
          <div className="d-flex justify-content-center flex-column col-2 align-items-center x12">
            <img
              src={pdm}
              alt=""
              style={{ width: "40px", height: "40px", margin: "1rem 0rem" }}
            />
            <p className="x11">Power Tools</p>
          </div>
          <div className="d-flex justify-content-center flex-column col-2 align-items-center x12">
            <img
              src={mhp}
              alt=""
              style={{ width: "40px", height: "40px", margin: "1rem 0rem" }}
            />
            <p className="x11">Material Handling & Packaging</p>
          </div>
          <div className="d-flex justify-content-center flex-column col-2 align-items-center x12">
            <img
              src={os}
              alt=""
              style={{ width: "40px", height: "40px", margin: "1rem 0rem" }}
            />
            <p className="x11">Office Supplies</p>
          </div>
          <div className="d-flex justify-content-center flex-column col-2 align-items-center x12">
            <img
              src={hs}
              alt=""
              style={{ width: "40px", height: "40px", margin: "1rem 0rem" }}
            />
            <p className="x11">Hand Tools</p>
          </div>
          <div className="d-flex justify-content-center flex-column col-2 align-items-center x12">
            <img
              src={el}
              alt=""
              style={{ width: "40px", height: "40px", margin: "1rem 0rem" }}
            />
            <p className="x11">Electrical</p>
          </div>
          <div className="d-flex justify-content-center flex-column col-2 align-items-center x12">
            <img
              src={lcr}
              alt=""
              style={{ width: "40px", height: "40px", margin: "1rem 0rem" }}
            />
            <p className="x11">Hydraulics & Pneumatics</p>
          </div>
          <div className="d-flex justify-content-center flex-column col-2 align-items-center x12">
            <img
              src={fnr}
              alt=""
              style={{ width: "40px", height: "40px", margin: "1rem 0rem" }}
            />
            <p className="x11">Furniture, Hospitality & Food Service</p>
          </div>
          <div className="d-flex justify-content-center flex-column col-2 align-items-center x12">
            <img
              src={br}
              alt=""
              style={{ width: "40px", height: "40px", margin: "1rem 0rem" }}
            />
            <p className="x11">Automotive  Maintenance & Lubricants</p>
          </div>
          <div className="d-flex justify-content-center flex-column col-2 align-items-center x12">
            <img
              src={cln}
              alt=""
              style={{ width: "40px", height: "40px", margin: "1rem 0rem" }}
            />
            <p className="x11">Cleaning</p>
          </div>
          <div className="d-flex justify-content-center flex-column col-2 align-items-center x12">
            <img
              src={lpr}
              alt=""
              style={{ width: "40px", height: "40px", margin: "1rem 0rem" }}
            />
            <p className="x11">Plumbing</p>
          </div>
          <div className="d-flex justify-content-center flex-column col-2 align-items-center x12">
            <img
              src={tt}
              alt=""
              style={{ width: "40px", height: "40px", margin: "1rem 0rem" }}
            />
            <p className="x11">Testing & Measuring Instruments</p>
          </div>
          <div className="d-flex justify-content-center flex-column col-2 align-items-center x12">
            <img
              src={hpu}
              alt=""
              style={{ width: "40px", height: "40px", margin: "1rem 0rem" }}
            />
            <p className="x11">Pumps</p>
          </div>
          <div className="d-flex justify-content-center flex-column col-2 align-items-center x12">
            <button className="x14"><p className="x13">Explore All Categories</p></button>
          </div>
        </div>
      </div>
      <div className="row x15">
         <div className="col-sm-3 d-flex justify-content-center x18">
           <img src={cube} alt="" style={{marginRight:'1rem'}} className="x17"/>
           <div className="d-flex flex-column">
            <p className="x16">Bulk Order</p>
            <p className="x16">More Discount</p>
           </div>
         </div>
         <div className="col-sm-3 d-flex justify-content-center x18">
           <img src={crown} alt="" style={{marginRight:'1rem'}} className="x17"/>
           <div className="d-flex flex-column">
            <p className="x16">5000+</p>
            <p className="x16">Trusted Brands</p>
           </div>
         </div>
         <div className="col-sm-3 d-flex justify-content-center x18">
           <img src={cal} alt="" style={{marginRight:'1rem'}} className="x17"/>
           <div className="d-flex flex-column">
            <p className="x16">Credit Availability </p>
            <p className="x16">Up to 30 Days</p>
           </div>
         </div>
         <div className="col-sm-3 d-flex justify-content-center x18">
           <img src={note} alt="" style={{marginRight:'1rem'}} className="x17"/>
           <div className="d-flex flex-column">
            <p className="x16">Save up to 30% </p>
            <p className="x16">With GST</p>
           </div>
         </div>
      </div>
    </div>
  );
};

export default Section1;
