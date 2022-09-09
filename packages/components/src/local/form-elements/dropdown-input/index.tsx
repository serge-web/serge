import React, { ChangeEvent } from "react";
// @ts-ignore
import "@serge/themes/App.scss";
import PropTypes from "./types/props";

const DropdownInput: React.FC<PropTypes> = ({ updateStore, selectOptions, disabled, data, className, placeholder }) => {

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    updateStore(event.target.value)
  };

  return (
    <select disabled={disabled} value={data ? data : 'placeholder'} onChange={onChange} className={className}>
      <option value='placeholder' disabled={true}>{placeholder}</option>
      {selectOptions.map(item => {
        return (<option key={`${item.value}${item.option}`} value={item.value}>{item.option}</option>)
      })}
    </select>
  );
};

export default DropdownInput;
