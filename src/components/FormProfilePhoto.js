import React, { useCallback } from "react";
// import { Button, User } from "components";
import classNames from "classnames";
import { useField } from "formik";
import { useDropzone } from "react-dropzone";
import { Button } from "./Button";

export const FormProfilePhoto = ({
  className,
  label = "Attachment",
  isRequired,
  buttonLabel = "Upload",
  maxFileSize = 5 * 1024 * 1024, // 5MB
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles[0].size < maxFileSize) {
        helpers.setValue(acceptedFiles[0]);
      }
    },
    [helpers, maxFileSize]
  );

  const { getRootProps, getInputProps, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    accept: "image/jpeg, image/png",
    multiple: false,
    onDrop,
  });

  return (
    <div className={classNames("profile-photo-control", className)}>
      <div className="d-flex flex-column">
        <div {...getRootProps({ className: "dropzone" })}>
          <div className="d-flex flex-wrap"></div>
          <input {...getInputProps()} />

          <img
            className="profile-image mt-3"
            src={
              field.value
                ? typeof field.value === "string"
                  ? field.value
                  : URL.createObjectURL(field.value)
                : "https://me.mymarx.io/assets/brands/profile-placeholder.png"
            }
            alt="placeholder"
          />
        </div>
        <div className="mx-auto">
          <Button
            buttonType="button"
            className="mt-4"
            size="large"
            type="outline"
            onClick={open}
            isOutline
            style={{ width: 130 }}
          >
            {buttonLabel}
          </Button>
        </div>
      </div>
      {meta.touched && meta.error && (
        <div className="profile-photo-control__validation">{meta.error}</div>
      )}
    </div>
  );
};
