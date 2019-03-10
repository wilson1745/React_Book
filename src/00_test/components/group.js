import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const Group = ({ options, input: { value = [], onChange } }) => {
  //console.log(ca_array.name);

  console.log(options);

  const onCheck = (option, isAdd) => {
    //console.log(option, isAdd);
    if (isAdd) {
      if (value.length == 2) {
        alert("最多只能選2");
        return;
      }
      //console.log(value, option);
      onChange([...value, option].sort());
    } else {
      //console.log("else");
      onChange(value.filter(val => val !== option));
    }
  };

  return (
    <React.Fragment>
      {options.map(option => (
        <div key={option}>
          <FormControlLabel
            control={
              <Checkbox
                name={option}
                checked={value.includes(option)}
                onChange={e => onCheck(e.target.name, e.target.checked)}
              />
            }
            color="primary"
            label={option}
          />
        </div>
      ))}
    </React.Fragment>
  );
};
export default Group;
