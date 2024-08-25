import React from "react";
import disney from "../../assets/category img/disney.png";
import logo from "../../assets/category img/logo.png";
import marvel from "../../assets/category img/marvel.png";
import nationalG from "../../assets/category img/nationalG.png";
import pixar from "../../assets/category img/pixar.png";
import starwar from "../../assets/category img/starwar.png";

import disneyvedio from "../../assets/vedios/disney.mp4";
import marvelvedio from "../../assets/vedios/marvel.mp4";
import nationalvedio from "../../assets/vedios/national-geographic.mp4";
import pixarvedio from "../../assets/vedios/pixar.mp4";
import starvedio from "../../assets/vedios/star-wars.mp4";

const Production = () => {
  const listItem = [
    {
      id: 1,
      image: disney,
      vedio: disneyvedio,
    },
    {
      id: 2,
      image: marvel,
      vedio: marvelvedio,
    },
    {
      id: 3,
      image: nationalG,
      vedio: nationalvedio,
    },
    {
      id: 4,
      image: pixar,
      vedio: pixarvedio,
    },
    {
      id: 5,
      image: starwar,
      vedio: starvedio,
    },
  ];
  return (
    <div className="flex p-2 px-5 md:px-16 gap-2 md:gap-5">
      {listItem.map((item, index) => (
        <div
          className="border-[2px] border-gray-600
        rounded-lg hover:scale-110 transition-all duration-300
        ease-in-out cursor-pointer relative shadow-xl 
        shadow-gray-800"
        >
          <video
            src={item.vedio}
            autoPlay
            loop
            playsInline
            muted
            className="absolute top-0 rounded-md opacity-0 hover:opacity-50 z-0"
          />
          <img src={item.image} className="w-full z-[1] opacity-100" alt="" />
        </div>
      ))}
    </div>
  );
};

export default Production;
