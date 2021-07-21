import React, { useState, useEffect, Suspense } from "react";
import ReactDom from "react-dom";
import "./contactDetails.css";
import { FaPhoneAlt, FaEnvelopeOpenText, FaMapMarkerAlt, FaRegTimesCircle } from "react-icons/fa";



const ContactDetails = ({ open, contactData, onClose }) => {
    if (!open) return null;

    return ReactDom.createPortal(
        <>
        {console.log("image",`url('${contactData.images[0]}')`)}
          <div className="contactFullDetails">
            <div className="nameDiv" style={{ backgroundImage: `url('${contactData.images[0]}')` }}>
              <div className="name">{contactData.contacts.main.firstName}</div>
            </div>
            <div className="phoneDiv">
            <FaPhoneAlt className="emailDiv"/>
              <div>{contactData.contacts.main.phoneNumber}</div>
            </div>
            <div className="emailDiv">
            <FaEnvelopeOpenText  className="emailDiv"/>
              <div>{contactData.contacts.main.email}</div>
            </div>
            <div className="addressDiv">
            <FaMapMarkerAlt className="emailDiv"/>
              <div>{contactData.contacts.main.address.street}<br/>
              {contactData.contacts.main.address.state}{contactData.contacts.main.address.zipCode}<br/>
              {contactData.contacts.main.address.city}<br/>
              {contactData.contacts.main.address.country}<br/>
              </div>
            </div>
            <button className="closeBtn" onClick={onClose}>
            <FaRegTimesCircle/>
            </button>
          </div>
        </>,
        document.getElementById("root")
      );
    };
          
            

export default ContactDetails;





//   <div className="contactFullDetails">
//           <button onClick={onClose}>Close</button>


//         </div>