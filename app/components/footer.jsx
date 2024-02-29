import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import React from "react";
import "./styles/footerStyle.css";

const Footer = () => {
  return (<div className="footerpart">
    <div className="insidefooter">
      <div className="footer1">
        <div className="fheader ">ABOUT US</div>
        <div className="college flex flex-col justify-start items-start">
          <div className="">
            <img
              className=" h-20 ml-14 mt-8"
              src="https://res.cloudinary.com/dkracb8u5/image/upload/v1706380270/Careerlink/Public/ej5izqga34pvxuisqy1j.png"
              // width={300}
              // height={200}
              alt="campus"
            />
         
          <div className="name"></div>
        </div>
        <div className="flex flex-col  items-start ml-14 mt-5 text-lg">
          <p> P.O. Box : 46 , Lamachaur Pokhara</p>
          <p>Tel. : 061-440457, 440463, 440093, 440465</p>
          <p>Fax No. : 061-440158</p>
          <p>E-mail : info@ioepas.edu.np</p>
        </div>
      </div> </div>
      <div className="footer2">
        <div className="fheader ">COMPANIES</div>
        <div className="grid grid-cols-5 grid-rows-3 text-lg mt-4 gap-2 ">
        <div className="col-start-2 row-start-2 col-span-3 justify-self-center" >partnership</div>
        <div className="col-start-2 row-start-1 col-span-3 justify-self-center">career</div>
        <div className="col-start-2 row-start-3 col-span-3 justify-self-center">explore opportunities</div>
      </div></div>
      <div className="footer3">
        <h2 className="fheader">SOCIAL</h2>
        <div className=" flex justify-center mt-3">
          <FontAwesomeIcon
            icon={faFacebook}
            size="xs"
            className="h-12 p-2  text-[#0F1035]"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            size="xs"
            className="h-12 p-2 text-[#0F1035]"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            size="xs"
            className="h-12 p-2 text-[#0F1035]"
          />
        </div>
      </div>
    </div>
    <div className="flex justify-center mb-2">© 2023 CareerLink. All Rights Reserved. Website.</div>
    </div>
  );
};

export default Footer;
