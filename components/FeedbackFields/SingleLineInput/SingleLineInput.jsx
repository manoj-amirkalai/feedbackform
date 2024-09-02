import React from "react";
import "./SingleLineInput.css";
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
const SingleLineInput = ({label,errormsg,require,removeField,id,setEditFieldId,
  opencloseaddfield,
  setRadioEdit,}) => {
  return (
    <div className="addfield_textarea">
      <p>{label}</p>
<input className="single_line_input" type="text" />
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

export default SingleLineInput;
