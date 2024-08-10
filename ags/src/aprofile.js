import React from "react";
import { Link } from "react-router-dom";
import "./aprofile.css"

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
    leftBlock: {
      width: "50%",
      height: "450px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(65, 105, 225, 0.5)",
    },
    rightBlock: {
      width: "50%",
      height: "450px",
      padding: "20px",
      boxSizing: "border-box",
      backgroundColor: "rgba(65, 105, 225, 0.5)",
    },
    galleryInfoContent: {
      fontSize: "16px",
      lineHeight: "1.6",
    },
  };


  function aprofile(){
    return(
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
        </div>
    );
  }
export default aprofile;