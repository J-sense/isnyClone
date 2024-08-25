import React, { useState } from "react";
import logo from "../../assets/images/Walt_Disney_logo_cover.webp";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { HiStar, HiTv, HiPlayCircle, HiPlusSmall } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";
import HeaderItem from "./HeaderItem";
import profile from "../../assets/images/profile-pic (2).png";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "Home",
      Icon: AiOutlineHome,
    },
    {
      name: "SEARCH",
      Icon: AiOutlineSearch,
    },
    {
      name: "WATCH LIST",
      Icon: HiPlusSmall,
    },
    {
      name: "ORIGINALS",
      Icon: HiStar,
    },
    {
      name: "MOVIES",
      Icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      Icon: HiTv,
    },
  ];
  return (
    <div className="flex justify-between m-5">
      <div className="flex items-center gap-8">
        <img className="w-[80px] md:w-[115px] bg" src={logo} alt="" />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.Icon} />
          ))}
        </div>
        <div className="flex gap-8 md:hidden">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.Icon} />
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={BsThreeDotsVertical} />
            {toggle ? (
              <div className="absolute border-[1px] border-slate-800 rounded-sm p-3 mt-2">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem name={item.name} Icon={item.Icon} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        className="w-[40px] h-[40px] rounded-full border-[1px] border-red-200"
        src={profile}
        alt=""
      />
    </div>
  );
};

export default Header;
