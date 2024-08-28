import React from "react";
import { BiSolidStar } from "react-icons/bi";
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { BsEmojiAngry } from "react-icons/bs";
import { BsEmojiFrown } from "react-icons/bs";
import { BsEmojiExpressionless } from "react-icons/bs";
import { BsEmojiGrin } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import './Smile.css'

const Smile = ({label,errormsg,require,removeField,id,setEditFieldId,
  opencloseaddfield,
  setRadioEdit,}) => {
  return (
    <div className="addfield_textarea">
      <p>{label}</p>
      <div className="star_icon_container">
        <BsEmojiAngry className="emoji_icon" />
        <BsEmojiFrown className="emoji_icon" />
        <BsEmojiExpressionless className="emoji_icon" />
        <BsEmojiSmile className="emoji_icon" />
        <BsEmojiGrin className="emoji_icon" />
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

export default Smile;
