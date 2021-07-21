import React, { useState } from 'react';
import ContactDetails from '../ContactDetails/contactDetails';
import "./contactCard.css";
import { FaAngleRight } from "react-icons/fa";

const ContactCard = ({ image, contactTitle, contactAddress, shortDesc, contactData }) => {
  const [showDetails, setShowDetails] = useState(false);
  const handleClick = () => {
    setShowDetails(true);
  };

  return (

    <>
      <div className="contactCard" onClick={handleClick}>
        <img
          alt={contactTitle}
          title={contactTitle}
          src={image}
          className="contactImage"
        />
        <div className="contactShortInfo">
          <div className="contactTitle">{contactTitle}</div>
          <div className="contactAddress">{contactAddress}</div>
          <div className="shortDesc">{shortDesc}</div>
        </div>
        <div className="rightArrow"><FaAngleRight /></div>
      </div>
      <ContactDetails
        open={showDetails}
        contactData={contactData}
        onClose={() => {
          setShowDetails(false);
        }}
      />
    </>
  );
};

export default ContactCard;
