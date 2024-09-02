import React from "react";
import "./TextArea.css";
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
const TextArea = ({
  label,
  errormsg,
  require,
  removeField,
  id,
  opencloseaddfield,
  setRadioEdit,setEditFieldId
}) => {
  return (
    <div className="addfield_textarea">
      <p>{label}</p>
      <textarea
        required={require}
        className="addfield_textarea_textarea"
      ></textarea>
      <span className="error_msg">{errormsg}</span>{" "}
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
      </div>{" "}
    </div>
  );
};

export default TextArea;
