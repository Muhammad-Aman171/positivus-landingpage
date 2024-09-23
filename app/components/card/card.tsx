import React from "react";
import Image, { StaticImageData } from "next/image";

import { BsArrowUpRightCircleFill } from "react-icons/bs";


import "./card.scss";

interface CardTypes {
  style?: string;
  heading1?: string;
  heading2?: string;
  iconstyle?: string;
  srcimg?: string | StaticImageData | undefined;
}

const Card: React.FC<CardTypes> = ({
  style,
  heading1,
  heading2,
  srcimg,
}) => {
  return (
    <div className={` card font-sapce-grotesk ${style}`}>
      <div className="card-heading">
        <div className="">
          <p>{heading1}</p>
          <p>{heading2}</p>
        </div>
        <div className="btn">
          <BsArrowUpRightCircleFill className="arrow-icon" />
          <button>Learn more</button>
        </div>
      </div>
      <div className="card-img">
            <BsArrowUpRightCircleFill className="arrow-icon" />
        <Image src={srcimg!} alt="img does not show" />
      </div>
    </div>
  );
};

export default Card;
