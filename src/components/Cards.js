import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStatus } from "../redux/actions";
import "./nav.css";
import { GoDotFill } from "react-icons/go";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";



const Cards = (props) => {
  
  const dispatch = useDispatch();
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
              <DeleteModal itemId={dataItem.id} />
              
            )}
          </div>
          {props.status === "Start" && <EditModal modalData={dataItem} />}
        </div>
      );
    }
  }

  return <>{data.cardData.map(displayer)}</>;
};

export default Cards;
