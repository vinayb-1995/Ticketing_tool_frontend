// import { useState } from 'react'
import React, { useState, useEffect } from "react";
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
// import { Combobox } from '@headlessui/react'
import "react-widgets/scss/styles.scss";
import DropdownList from "react-widgets/DropdownList";

export const DropdownField = ({
  index,
  id,
  name,
  code,
  label,
  placeholder,
  error,
  data,
  setValue,
  getvalue = () => {},
  disabled,
  onChangeValue = () => {},
  extraLabel = '',
  required,
  icon
}) => {
  const [selectedData, setSelectedData] = useState(setValue);

  useEffect(() => {
    let obj ={
      ...selectedData,
      'textField':name,
      'textCode':code,
      'index':index
    }
    getvalue(obj);
    onChangeValue(index, name, selectedData?.name);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getvalue, selectedData]);

  return (
    <>
      <label className="ms-2">
      {label} {required ? "*" : ""} {extraLabel !== ""? <i className="bi bi-info-circle" title={extraLabel}></i>:""} 
      </label>
      <div className="dropdown" >
      {icon && <span className="icons" >{icon}</span>}
      <DropdownList
        id={id}
        name={name}
        className="dropdownfield"
        data={data}
        dataKey='id'
        textField='name'
        defaultValue={''}
        value={setValue}
        onChange={(value) => setSelectedData(value)}
        filter="contains"
        placeholder={placeholder}
        disabled={disabled}
      />
      </div>
      {error && typeof error.message === "string" && (
        <span className="text-red-500 text-xs">{error.message}</span>
      )}
    </>
  );
};
