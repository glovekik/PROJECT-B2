import React, { useState } from 'react';
import axios from 'axios';

function UserDetail() {
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const fetchUserDetails = async () => {
    try {
      const response = await axios.post('http://localhost:5000/user/details', { email });
      setUserData(response.data);
      setError(null);
    } catch (error) {
      setError("User not found");
      setUserData(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserDetails();
  };

  return (
    <div>
      <h2>User Details</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleInputChange} />
        <button type="submit">Get Details</button>
      </form>
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <h3>User Data:</h3>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Display other user details */}
        </div>
      )}
    </div>
  );
}

export default UserDetail;
