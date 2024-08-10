import React, { useState } from "react";
import axios from "axios";
import "./contactus.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    zip: "",
    message: "",
    receiveNewsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/submit-feedback", formData);
      alert("Feedback submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        zip: "",
        message: "",
        receiveNewsletter: false,
      });
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Failed to submit feedback. Please try again later.");
    }
  };

  return (
    <div className="contact-form-container"> {/* New container class */}
      <div className="contact-form"> {/* New form class */}
        <h3>Contact Us</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="inputText1">Name</label>
            <input
              type="text"
              className="form-control"
              id="inputText1"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPhone">Phone</label>
            <input
              type="text"
              className="form-control"
              id="inputPhone"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputCity">City</label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputState">State</label>
            <select
              className="form-control"
              id="inputState"
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              <option selected>Choose...</option>
              {/* Add options for states */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="inputZip">Zip</label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              name="zip"
              placeholder="Zip"
              value={formData.zip}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputMessage">Message</label>
            <textarea
              className="form-control"
              id="inputMessage"
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="receiveNewsletter"
              name="receiveNewsletter"
              checked={formData.receiveNewsletter}
              onChange={handleChange}
            />
                        <label className="form-check-label" htmlFor="receiveNewsletter">
              Receive newsletters
            </label>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;

