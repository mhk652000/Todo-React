import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStatus, deleteData } from "../redux/actions";
import "./nav.css";
import { MdDelete } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import EditModal from "./EditModal";

const Cards = (props) => {
  const dispatch = useDispatch();
  const deleter = useDispatch();
  const data = useSelector((state) => state);
  console.log("card data", data);

  function displayer(dataItem) {
    let dotClass = "";
    if (dataItem.type === "DEVELOPMENT") {
      dotClass = "dev";
    } else if (dataItem.type === "TYPOGRAPHY") {
      dotClass = "typo";
    } else {
      dotClass = "design";
    }

    function handleClick(typeStatus) {
      let newStatus = "";
      if (typeStatus === "Start") {
        newStatus = "In Progress";
      } else {
        newStatus = "Completed";
      }

      dispatch(updateStatus(dataItem.id, newStatus));
    }

    function handleDelete() {
      deleter(deleteData(dataItem.id));
    }

    if (props.status === dataItem.status) {
      return (
        <div className="cardss">
          <h6 id="chHead">
            <GoDotFill className={dotClass} />
            {dataItem.type}
          </h6>
          <h4 id="cHead">{dataItem.heading}</h4>
          <p id="cText">{dataItem.text}</p>

          <div className="threeButtons">
            {props.status !== "Completed" && (
              <button
                className="carrrdButton"
                onClick={() => handleClick(props.status)}
              >
                <IoCheckmarkDoneSharp className="doneButton" />
              </button>
            )}

            {props.status === "Start" && (
              <button className="carrrdButton" onClick={handleDelete}>
                <MdDelete className="delButton" />
              </button>
            )}
          </div>
          {props.status == "Start" && <EditModal modalData={dataItem} />}
        </div>
      );
    }
  }

  return <>{data.cardData.map(displayer)}</>;
};

export default Cards;
