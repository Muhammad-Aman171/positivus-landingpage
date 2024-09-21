import React from "react";
import Image from "next/image";

import Icon from "@/public/assets/Icon.png";

const Navbar: React.FC = () => {
  return (
    <div className=" font-sapce-grotesk flex justify-between items-center h-28  ">
      <div className=" flex items-center justify-between w-48">
        <Image src={Icon} alt="icon does not show" className="w-6 h-7" />
        <h1 className="text-4xl font-extrabold ">Positivus</h1>
      </div>
      <div className=" flex items-center justify-between w-[70%] min-w-3/9  ">
        <ul className="  flex items-center  justify-around w-3/4  text-xl font-medium  max-lg:hidden ">
          <li>About us</li>
          <li>Services</li>
          <li>Use Cases</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
        <div className="  flex items-center justify-center max-lg:border-[3px]  max-lg:w-44  ">
          <button className="border-[1.2px]  border-[#191A23] h-16 w-48 rounded-lg font-medium ">Request a quote</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
