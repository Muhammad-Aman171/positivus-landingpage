import React from "react";
import Image from "next/image";

import { BsArrowUpRightCircleFill } from "react-icons/bs";

import Img from "@/public/card/card-img1.png";

import "./card.scss";

const Card = () => {
  return (
    <div className="card">
      <div className="card-heading">
        <div>
          <p>Search engine</p>
          <p>optimization</p>
        </div>
        <div className="btn">
          <BsArrowUpRightCircleFill />
          <p>Learn more</p>
        </div>
      </div>
      <div className="card-img">
        <Image src={Img} alt="img does not show" />
      </div>
    </div>
  );
};

export default Card;
