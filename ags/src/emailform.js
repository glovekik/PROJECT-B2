// import React, { useState } from "react";
// import axios from "axios";

// function emailForm() {
//   // const [emailData, setEmailData] = useState({
//     from: "drkpn.in@gmail.com", // Hardcoded sender email
//     to: "",
//     subject: "",
//     text: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEmailData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/sendemail", emailData);
//       alert("Email sent successfully!");
//       setEmailData({
//         from: "drkpn.in@gmail.com", // Reset sender email
//         to: "",
//         subject: "",
//         text: ""
//       });
//     } catch (error) {
//       console.error("Error sending email:", error);
//       alert("Failed to send email. Please try again later.");
//     }
//   };

//   return (
//     <div>
//       <h2>Email Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Recipient Email:</label>
//           <input
//             type="email"
//             name="to"
//             value={emailData.to}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Subject:</label>
//           <input
//             type="text"
//             name="subject"
//             value={emailData.subject}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Message:</label>
//           <textarea
//             name="text"
//             value={emailData.text}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Send Email</button>
//       </form>
//     </div>
//   );
// }

// export default emailForm;
