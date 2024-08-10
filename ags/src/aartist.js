import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./aartist.css";

const styles = {
  header: {
    float: "left",
    height: "45px",
    marginTop: "6px",
  },
  artist: {
    float: "right",
    paddingRight: "30px",
    cursor: "pointer",
  },
  order: {
    float: "right",
    paddingRight: "15px",
    cursor: "pointer",
  },
  aitem: {
    float: "right",
    paddingRight: "20px",
    cursor: "pointer",
  },
  logout: {
    float: "right",
    paddingRight: "30px",
    cursor: "pointer",
  },
  profile: {
    float: "right",
    paddingRight: "25px",
    cursor: "pointer",
  },
  formContainer: {
    width: "100%",
    maxWidth: "500px", // Limiting width for better readability
    margin: "0 auto",
  },
  formGroup: {
    marginBottom: "15px",
  },
  formLabel: {
    display: "block",
    marginBottom: "5px",
  },
  formInput: {
    width: "100%",
    padding: "8px",
    boxSizing: "border-box",
  },
  formTextarea: {
    width: "100%",
    padding: "8px",
    boxSizing: "border-box",
    minHeight: "100px", // Adjust as needed
  },
  formButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

function Aartist() {
  const [formData, setFormData] = useState({
    photo: "",
    name: "",
    designation: "",
    works: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/add-artist", formData);
      console.log("Response:", response.data);
      // Reset form data if needed
      setFormData({
        photo: "",
        name: "",
        designation: "",
        works: "",
      });
      // Optionally provide feedback to the user upon successful submission
      alert("Artist added successfully!");
    } catch (error) {
      console.error("Error adding artist:", error);
      // Optionally provide feedback to the user upon error
      alert("Failed to add artist. Please try again.");
    }
  };

  return (
    <div className="full-height">
      <div className="header">
        <label style={styles.header}>Art Gallery</label>
        <div className="left-side">
          <Link to="/" style={styles.logout}>
            Logout
          </Link>
          <Link to="/aprofile" style={styles.profile}>
            Profile
          </Link>
          <Link to="/aitem" style={styles.aitem}>
            My Gallery
          </Link>
          <Link to="/order" style={styles.order}>
            Orders
          </Link>
          <Link to="/aartist" style={styles.artist}>
            Artists
          </Link>
        </div>
      </div>
      <div className="form-container" style={styles.formContainer}>
        <h2>Add New Artist</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group" style={styles.formGroup}>
            <label htmlFor="artistPhoto" style={styles.formLabel}>
              Artist Photo URL:
            </label>
            <input
              type="url"
              id="artistPhoto"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              style={styles.formInput}
              required
            />
          </div>
          <div className="form-group" style={styles.formGroup}>
            <label htmlFor="name" style={styles.formLabel}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={formData.name}
              style={styles.formInput}
              required
            />
          </div>
          <div className="form-group" style={styles.formGroup}>
            <label htmlFor="designation" style={styles.formLabel}>
              Designation:
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              onChange={handleChange}
              value={formData.designation}
              style={styles.formInput}
              required
            />
          </div>
          <div className="form-group" style={styles.formGroup}>
            <label htmlFor="works" style={styles.formLabel}>
              Works:
            </label>
            <textarea
              id="works"
              name="works"
              rows="4"
              onChange={handleChange}
              value={formData.works}
              style={styles.formTextarea}
              required
            ></textarea>
          </div>
          <button type="submit" style={styles.formButton}>
            Add Artist
          </button>
        </form>
      </div>
    </div>
  );
}

export default Aartist;
