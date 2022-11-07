import clsx from "clsx";
import React from "react";
import { withStyles } from "@material-ui/core";

import Style from "./style";
import ProgressButton from "../ProgressButton";
import RoundPlus from "../../assets/icons/RoundPlus";
import FileUploadInput from "../../../FileUploadInput";

const DirectImageUpload = ({
  classes,
  onClick,
  imageRef,
  className,
  setImageRef,
  onImagesUploaded,
  ...props
}) => {
  const uploadImages = () => {
    // Uploads image
    onImagesUploaded(uploadedImage);
  };
  return (
    <ProgressButton
      size="small"
      onClick={onClick}
      className={clsx(classes.root, className)}
      {...props}
    >
      <RoundPlus fill="#707070" width="15px" height="15px" />

      <span className={classes.text}>Legg til bilde</span>

      <FileUploadInput
        multiple
        onChange={uploadImages}
        ref={(ref) =>
          passedSetImageRef ? passedSetImageRef(ref) : setImageRef(ref)
        }
      />
    </ProgressButton>
  );
};

export default withStyles(Style)(DirectImageUpload);
