import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

import useFetch from '../../utility'
import ContactDetails from '../ContactDetails/contactDetails';
import "./contactCard.css";


//https://tracktik-challenge.staffr.com/sites

const ContactCard = ({ image, contactTitle, contactAddress, shortDesc , contactData }) => {
  const [showDetails, setShowDetails] = useState(false);
  const handleClick = () => {
    setShowDetails(true);

  };
  const rightArrow = (
    <svg
      width="8pt"
      height="8pt"
      version="1.1"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m71.141 50-1.8125-2-36-40-4.4688 4 34.188 38-34.188 38 4.4688 4 36-40z" />
    </svg>
  );

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
        <div className="rightArrow">{rightArrow}</div>
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
