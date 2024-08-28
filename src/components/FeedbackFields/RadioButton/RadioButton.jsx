import React from "react";
import "./RadioButton.css";
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const RadioButton = ({
  label,
  errormsg,
  require,
  removeField,
  id,
  setEditFieldId,
  opencloseaddfield,
  options,
  setRadioEdit,
}) => {
  return (
    <div className="addfield_textarea">
      <p>{label}</p>
      <div className="radio_option">
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            {options.map((values, index) => {
              return (
                <div key={index}>
                  <FormControlLabel
                  className="radio_options"
                    value={values}
                    control={<Radio />}
                    label={values}
                  />
                </div>
              );
            })}
          </RadioGroup>
        </FormControl>
      </div>

      <span className="error_msg">{errormsg}</span>
      <div className="edit_delete_icon">
        <HiPencil
          className="edit_delete_icons"
          onClick={() => {
            opencloseaddfield(false);
            setEditFieldId(id);
            setRadioEdit(true);
          }}
        />
        <MdDelete
          className="edit_delete_icons"
          onClick={() => {
            opencloseaddfield(true);
            setRadioEdit(false);
            removeField(id);
          }}
        />
      </div>
    </div>
  );
};

export default RadioButton;
