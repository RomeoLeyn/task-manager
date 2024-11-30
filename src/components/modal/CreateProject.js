import React, { useState } from "react";
import "./Modal.scss";
import { createProject } from "../../api/projects";

const CreateProject = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    color: "#ffffff",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: "", description: "", category: "", color: "#ffffff" });
    createProject(formData.title, formData.description, formData.category, formData.color);
    onClose();
  };

  if (!isOpen) return null; // Не рендерити, якщо модалка закрита

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Create New Project</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit} className="modal-body">
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              required
            ></textarea>
          </label>
          <label>
            Category:
            <input
              list="categories"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
            <datalist id="categories">
              <option value="Programming"></option>
              <option value="Design"></option>
              <option value="Marketing"></option>
            </datalist>
          </label>
          <label>
            Color Scheme:
            <input
              type="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
            />
          </label>
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