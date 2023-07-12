import React from "react";
import "./nav.css";
import Dropdown from "./Dropdown";
import { BsSearch } from "react-icons/bs";
import { BiImageAlt } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Boxes from "./Boxes";
import { useSelector } from "react-redux";

export default function Navbar() {
  const data = useSelector((state) => state);
  console.log("Navbar data:", data);
  return (
    <div className="navBar">
      <form>
        <BsSearch className="searchIcon" />
        <input className="searchInput" placeholder="Search"></input>
        <IoNotificationsOutline className="notiIcon" />
        <AiOutlineQuestionCircle className="notiIcon" />
        <BiImageAlt className="notiIcon" />
      </form>
      <Dropdown />
      <div className="allBoxes">
        <Boxes status="Start"/>
        <Boxes status="In Progress"/>
        <Boxes status="Completed"/>
        {/* <Boxes dat={options2} />
        <Boxes dat={options3} /> */}
      </div>
    </div>
  );
}
