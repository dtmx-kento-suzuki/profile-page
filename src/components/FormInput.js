import React from "react";
import classNames from "classnames";
import { useField } from "formik";
import { nanoid } from "nanoid";

export const FormInput = ({
  label,
  className,
  help,
  type = "text",
  placeholder,
  isRequired,
  maxLength,
  disableAutoComplete = false,
  isTouched = false,
  disabled = false,
  textAlign = "left",
  ...props
}) => {
  const [field, meta, helpers] = useField(props);

  const handleChange = (event) => {
    let value = event.target.value || "";
    if (type === "number") {
      value = value.replace(/[^\d]/g, "");
    }
    helpers.setValue(maxLength ? value.slice(0, maxLength) : value);
  };
  const id = nanoid();
  return (
    <div
      className={classNames("input-control", className, {
        error: (isTouched || meta.touched) && meta.error,
      })}
    >
      {label && (
        <div className="d-flex justify-content-between">
          <label htmlFor={id} className="input-control__label">
            {label}
          </label>
          {!isRequired && (
            <div className="input-control__required">Optional</div>
          )}
        </div>
      )}
      <input
        value={field.value || ""}
        id={id}
        onChange={handleChange}
        placeholder={placeholder}
        type={type}
        autoComplete={"new-password"}
        disabled={disabled}
        className={classNames({
          active: field.value,
        })}
        style={{ textAlign }}
      />
      <div className="input-control__footer">
        {(isTouched || meta.touched) && meta.error && (
          <div className="input-control__validation">{meta.error}</div>
        )}
        {help && <div className="input-control__help ml-auto">{help}</div>}
      </div>
    </div>
  );
};
