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
            <textarea
              placeholder="Less than 200 words."
              className="description-text"
            />
          </div>
          <div className="instructions-area area">
            <div className="toggle-container">
              <div className="toggle-btn">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="switch-text">
                <span>Personalization</span>
              </div>
            </div>
            <span>Instructions for buyer</span>
            <textarea
              placeholder="Ex: Please explain how you will want your present to be wrapped"
              className="instructions-text"
            />
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
