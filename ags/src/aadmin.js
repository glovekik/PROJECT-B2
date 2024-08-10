import React, { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
  const [feedbackData, setFeedbackData] = useState([]);
  

  const fetchFeedbackData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/admin/feedback");
      setFeedbackData(response.data);
    } catch (error) {
      console.error("Error fetching feedback data:", error);
    }
  };

  useEffect(() => {
    fetchFeedbackData();
  }, []);

  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/admin/delete-feedback/${id}`);
      alert("Feedback deleted successfully!");
      // Refresh feedback data
      fetchFeedbackData();
    } catch (error) {
      console.error("Error deleting feedback:", error);
      alert("Failed to delete feedback. Please try again later.");
    }
  };

  return (
    <div>
      <h2>Admin Page</h2>
      <div>
        <h3>Feedback</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {feedbackData.map((feedback) => (
              <tr key={feedback._id}>
                <td>{feedback.name}</td>
                <td>{feedback.email}</td>
                <td>{feedback.message}</td>
                <td>
                  <button onClick={() => handleDelete(feedback._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
