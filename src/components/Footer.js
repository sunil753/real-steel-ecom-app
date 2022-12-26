import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-600 text-white px-5 ">
      <div className="container m-auto">
        <div className="flex flex-col md:flex-row justify-between py-20 gap-10">
          <div className="flex-1">
            <h3 className="font-bold text-2xl pb-10">REGIONAL DEPOTS</h3>
            <p>
              Delhi, Bangalore, Hyderabad, Ahmedabad, Chennai, Kolkata, Surat,
              Bhubaneswar , Lucnow, Kanpur, Nagpur, Vadodra, Ghaziabad, Rajkot
            </p>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-2xl pb-10">CONTACT US</h3>

            <span>
              <p>Address:</p>
              <p>Unit 1 90FT Road, Sakinaka , Andheri (E), Mumbai - 400072</p>
            </span>
            <span>
              <p>Phone:</p>
              <p>+91 1122335566</p>
            </span>
            <span>
              <p>Email:</p>
              <p>sales@realsteel.co.in</p>
            </span>
          </div>
        </div>
        <hr />
        <div className="flex-col items-center md:flex-row flex justify-between text-xs  py-3">
          <p>Copyright © 2022 Sunil Kumar Gouda all rights reserved</p>
          <p> Developed By Sunil Gouda with ❤️ </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
