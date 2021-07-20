import React, { useState, useEffect, Suspense } from "react";
import ReactDom from "react-dom";
import "./contactDetails.css";

const ContactDetails = ({ open, contactData, onClose }) => {
    if (!open) return null;

    return ReactDom.createPortal(
        <>
          
            <div className="wrapper contactFullDetails">
                <div className="contact-card mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__title mdl-card--expand">
                        <h2 className="mdl-card__title-text">Sarah Connor</h2>
                        
                    </div>
                    <div className="mdl-card__supporting-text">
                        <ul class="mdl-list">
                        <li class="mdl-list__item mdl-list__item--two-line">
                                <span class="mdl-list__item-primary-content">
                                    <i class="material-icons mdl-list__item-icon">Name</i>
                                    {contactData.contacts.main.firstName}
                                </span>
                            </li>
                            <li class="mdl-list__item mdl-list__item--two-line">
                                <span class="mdl-list__item-primary-content">
                                    <i class="material-icons mdl-list__item-icon">phone</i>
                                    {contactData.contacts.main.phoneNumber}
                                    <span class="mdl-list__item-sub-title">Mobile</span>
                                </span>
                            </li>
                            <div class="mdl-menu__item--full-bleed-divider"></div>
                            <li class="mdl-list__item mdl-list__item--two-line">
                                <span class="mdl-list__item-primary-content">
                                    <i class="material-icons mdl-list__item-icon">email</i>
                                     {contactData.contacts.main.email}
                                    <span class="mdl-list__item-sub-title">Personal</span>
                                </span>
                            </li>
                            <div class="mdl-menu__item--full-bleed-divider"></div>
                            <li class="mdl-list__item mdl-list__item--two-line">
                                <span class="mdl-list__item-primary-content">
                                    <i class="material-icons mdl-list__item-icon">place</i>
                                    {contactData.address.street}<br/>
                                    {contactData.address.city} <br/>
                                    {contactData.address.state}{contactData.address.zipCode}<br/>
                                    {contactData.address.country}

                                    <span class="mdl-list__item-sub-title">Home</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </>,
        document.getElementById("root")
    );
};

export default ContactDetails;





//   <div className="contactFullDetails">
//           <button onClick={onClose}>Close</button>


//         </div>