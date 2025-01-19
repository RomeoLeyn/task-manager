import React, { useState } from "react";

import { createProject } from "../../../api/projects";
import { getRandomColor } from "../../../utils/utils";

import "./Modal.scss";

const CreateProject = ({ isOpen, onClose, onSubmit, randColor }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "DEVELOPMENT",
    color: randColor || getRandomColor(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setFormData({ title: "", description: "", category: "", color: "#ffffff" });
    createProject(formData.title, formData.description, formData.category, formData.color);
    onClose();
  };

  if (!isOpen) return null; 

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Create New Project</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit} className="modal-body" name="create-project-form">
          <label className="input-container required">
            Title:
            <input
              className="input-text"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="New Project"
              required
            />
          </label>
          <label className="input-container required">
            Description:
            <textarea
              className="input-text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description..."
              rows="3"
              required
            ></textarea>
          </label>
          <label className="input-container required">
            Category:
            <input
              className="input-text"
              type="text"
              list="categories"
              name="category"
              placeholder={formData.category}
              onChange={handleChange}
              required
            />
            <datalist id="categories">
              <option value="DEVELOPMENT"></option>
              <option value="DESIGN"></option>
              <option value="MARKETING"></option>
              <option value="FINANCE"></option>
              <option value="ANALYTICS"></option>
              <option value="EDUCATION"></option>
              <option value="SALES"></option>
              <option value="SOCIAL_MEDIA"></option>
              <option value="CONTENT_MANAGEMENT"></option>
              <option value="INNOVATION"></option>
              <option value="CUSTOMER_SUPPORT"></option>
              <option value="HEALTH_FITNESS"></option>
              <option value="LOGISTICS"></option>
              <option value="OCCUPATIONAL_SAFETY"></option>
              <option value="SUSTAINABILITY"></option>
              <option value="PROJECT_MANAGEMENT"></option>
              <option value="LEGAL"></option>
              <option value="REAL_ESTATE"></option>
              <option value="ARTS_CULTURE"></option>
              <option value="TRAVEL"></option>
              <option value="FASHION"></option>
              <option value="ENGINEERING"></option>
              <option value="PHOTOGRAPHY"></option>
              <option value="VIDEO_PRODUCTION"></option>
              <option value="RESEARCH_DEVELOPMENT"></option>
              <option value="CYBERSECURITY"></option>
              <option value="EVENTS"></option>
              <option value="CHARITY"></option>
              <option value="AUTOMOTIVE"></option>
              <option value="FOOD"></option>
            </datalist>
          </label>
          <div className="color-scheme">
            <label>
              Color Pick:
              <input
                className="input-color"
                type="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
              />
            </label>
            <span className="or-label">or</span>
            <label>
              HEX:
              <input
                type="text"
                name="colorHEX"
                value={formData.color}
                onChange={handleChange}
              />
            </label>
          </div>
          <div id="create-project-modal-status-bar" className="modal-status-bar">
          <span className="required">*</span> Fill all marked fields 
          </div>
        </form>
        <div className="modal-footer">
          <button type="button" className="btn cancel" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn create" onClick={handleSubmit}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;