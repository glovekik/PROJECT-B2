// AItem.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./aitem.css";

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
};

function AItem() {
  const [formData, setFormData] = useState({
    photo: "",
    artName: "",
    artist: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/add-item", formData);
      console.log(response.data);
      setFormData({
        photo: "",
        artName: "",
        artist: "",
        price: "",
        description: "",
      });
    } catch (error) {
      console.error("Error adding item:", error);
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
      <div className="form-container">
        <h2>Add New Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="photo">Photo:</label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              value={formData.photo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="artName">Art Name:</label>
            <input
              type="text"
              id="artName"
              name="artName"
              value={formData.artName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="artist">Artist:</label>
            <input
              type="text"
              id="artist"
              name="artist"
              value={formData.artist}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit">Add Item</button>
        </form>
      </div>
    </div>
  );
}

export default AItem;
