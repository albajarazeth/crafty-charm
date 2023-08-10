import React from "react";
import MetadataPanel from "../components/MetadataPanel";
import "./UploadItem.css";
const UploadItem = () => {
  return (
    <div className="upload-container">
      <div className="upload-content">
        <MetadataPanel />
      </div>
      <div className="upload-left">
        <div className="photo-area">drag n drop</div>
        <div className="upload-text-area">
          <div className="description-area area">
            <span>Description</span>

            <textarea className="description-text" />
          </div>
          <div className="instructions-area area">
            <span>Instruction for buyer</span>
            <textarea className="instructions-text" />
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default UploadItem;
