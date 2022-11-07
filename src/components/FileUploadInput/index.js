import React, { forwardRef } from "react";

const styleConfig = {
  top: 0,
  width: 0,
  position: "absolute",
  visibility: "hidden",
};

const FileUploadInput = forwardRef(
  (
    {
      style = {},
      type = "file",
      hidden = true,
      accept = "image/jpeg,image/png,image/jpg,image/bmp,image/webp,image/gif,.svg,.ico",
      ...props
    },
    ref
  ) => {
    const defaultStyle = hidden ? styleConfig : {};

    return (
      <input
        ref={ref}
        type={type}
        accept={accept}
        style={{
          ...defaultStyle,
          ...style,
        }}
        {...props}
      />
    );
  }
);

export default FileUploadInput;
