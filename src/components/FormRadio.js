import React from "react";
import classNames from "classnames";
import { useField } from "formik";


export const FormRadio = ({
  className,
  values = [],
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div className={className}>
      <div className={classNames("d-flex", "flex-wrap")}>
        {values.map(({ title, id: itemVal }) => {
          return (
            <label
              key={itemVal}
              className={classNames("radio-control", {
                error: meta.touched && meta.error,
              })}
            >
              {title}
              <input
                type="radio"
                checked={itemVal === field.value}
                onChange={() => helpers.setValue(itemVal)}
                name={props.name}
              />
              <span></span>
            </label>
          );
        })}
      </div>
      {meta.touched && meta.error && (
        <div className="radio-control__validation">{meta.error}</div>
      )}
    </div>
  );
};
