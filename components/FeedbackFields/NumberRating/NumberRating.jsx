import React from "react";
import "./NumberRating.css";
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
const NumberRating = ({label,errormsg,require,removeField,id,setEditFieldId,
  opencloseaddfield,
  setRadioEdit,}) => {
  return (
    <div className="addfield_textarea">
      <p>
    {label}  </p>
      <div className="number_rating">
        <span className="number">1</span>
        <span className="number">2</span>
        <span className="number">3</span>
        <span className="number">4</span>
        <span className="number">5</span>
        <span className="number">6</span>
        <span className="number">7</span>
        <span className="number">8</span>
        <span className="number">9</span>
        <span className="number">10</span>
      </div>
     
 <span className="error_msg">{errormsg}</span>
      <div className="edit_delete_icon">
      <HiPencil
          className="edit_delete_icons"
          onClick={() => {
            opencloseaddfield(false);
            setRadioEdit(false);
            setEditFieldId(id);
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

export default NumberRating;
