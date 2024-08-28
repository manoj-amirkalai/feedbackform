import React from "react";
import "./Category.css";
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";

const Category = ({
  label,
  errormsg,
  require,
  removeField,
  id,
  opencloseaddfield,
  setEditFieldId,
  setRadioEdit,
  options,
}) => {
  return (
    <div className="addfield_textarea">
      <p>{label}</p>
      <div className="category_option">
      {options.map((data,index)=>{
        return <span key={index}>{data}</span>
      })}
      </div>
      <span className="error_msg">{errormsg}</span>
      <div className="edit_delete_icon">
        <HiPencil
          className="edit_delete_icons"
          onClick={() => {
            opencloseaddfield(false);
            setEditFieldId(id),
            setRadioEdit(true);
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

export default Category;
