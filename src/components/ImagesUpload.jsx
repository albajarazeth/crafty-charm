import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./ImagesUpload.css";
import { BsFillImageFill } from "react-icons/bs";

const ImagesUpload = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Dropping files ...</p>
      ) : (
        <section className="drop-container">
          <span className="d-message">
            <div className="img-icon">
              <BsFillImageFill size={25} />
            </div>
            <span>
              Drag and drop some files here or{" "}
              <span className="d-message-bold"> click to select files</span>
            </span>
          </span>
        </section>
      )}
    </div>
  );
};

export default ImagesUpload;
