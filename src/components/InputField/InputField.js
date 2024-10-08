import React from "react";

export const InputField = ({
  label,
  name,
  id,
  type = "text",
  placeholder,
  error,
  className,
  value,
  disabled,
  onChange,
  required,
  maxLength = "",
  readOnly = false,
  extraLabel = "",
  onBlur,
  icon,
}) => {
  return (
    <div className="flex-column">
      <label htmlFor={id} className="">
        {label} {required ? "*" : ""}
        {extraLabel !== "" ? (
          <i className="bi bi-info-circle" title={extraLabel}></i>
        ) : (
          ""
        )}
      </label>
      <div className="inputForm">
        {icon && <span className="input-icon">{icon}</span>}
        <input
          type={type}
          name={name}
          id={id}
          className={`${className} input`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
          readOnly={readOnly}
        />
      </div>
      {error && <p className="text-danger error">{error}</p>}
    </div>
  );
};
