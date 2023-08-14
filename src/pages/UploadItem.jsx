import React from "react";
import MetadataPanel from "../components/MetadataPanel";
import "./UploadItem.css";
import ImagesUpload from "../components/ImagesUpload";
const UploadItem = () => {
  return (
    <div className="upload-container">
      <div className="upload-content">
        <MetadataPanel />
      </div>
      <div className="upload-left">
        <div className="photo-area">
          <ImagesUpload />
        </div>
        <div className="upload-text-area">
          <div className="description-area area">
            <span>Description</span>

            <textarea className="description-text" />
          </div>
          <div className="instructions-area area">
            <span>Instructions for buyer</span>
            <textarea className="instructions-text" />
          </div>
        </div>

        <div className="upload-bottom">
          <div className="delivery-area">
            <span>Delivery</span>
            <div className="d-option">
              <input id="international" type="radio" />
              <label htmlFor="international">International</label>
            </div>

            <div className="d-option">
              <input id="international" type="radio" />
              <label htmlFor="international">Regional</label>
            </div>

            <div className="d-option">
              <input id="international" type="radio" />
              <label htmlFor="international">Pre-Order</label>
            </div>
          </div>

          <div>
            <button className="item-submit">SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadItem;
