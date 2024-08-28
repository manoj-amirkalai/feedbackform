import React from "react";
import "./StarRating.css";
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";import { BiSolidStar } from "react-icons/bi";
const StarRating = ({label,errormsg,require,removeField,id,setEditFieldId,
  opencloseaddfield,
  setRadioEdit,}) => {
  return (
    <div className="addfield_textarea">
      <p>{label}</p>
    <div className="star_icon_container">
    <BiSolidStar className="star_icon" />
    <BiSolidStar className="star_icon" />
    <BiSolidStar className="star_icon" />
    <BiSolidStar className="star_icon" />
    <BiSolidStar className="star_icon" />
    </div>
   
 <span className="error_msg">{errormsg}</span>
      <div className="edit_delete_icon">
      <HiPencil
          className="edit_delete_icons"
          onClick={() => {
            opencloseaddfield(false);
            setEditFieldId(id);
            setRadioEdit(false);
          }}
        />
        <MdDelete
          className="edit_delete_icons"
          onClick={() => {
            opencloseaddfield(true);
            removeField(id);
          }}
        />
      </div>
      </div>
  );
};

export default StarRating;
