import React from "react";
import { Link } from "react-router-dom";
import SIVA from './images/siva.jpg';
import LOVEKIK from './images/Lovkik.jpg';
import SATWIK from './images/Me.jpg';
import "./team.css";

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
  blogs: {
    float: "right",
    paddingRight: "15px",
    cursor: "pointer",
  },
  painting: {
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
  team: {
    float: "right",
    paddingRight: "20px",
    cursor: "pointer"
  },
  contact:{
    float: "right",
    paddingRight: "15px",
    cursor: "pointer"
  },
  shopping:{
    float: "right",
    paddingRight: "10px",
    cursor: "pointer"
  }
};

const cardData = [
  {
    id: 1,
    imageUrl: SATWIK,
    title: "ILAM VENKATA SATWIK",
    content: "Hi-Fructose was founded by two artists by the name of At",
    buttonLink: "https://www.linkedin.com/in/ilam-venkata-satwik-20249a263",
  },
  {
    id: 2,
    imageUrl: LOVEKIK,
    title: "GUDIVADA LOVEKIK",
    content: "Artnews is the oldest art magazine in the world.",
    buttonLink: "https://www.linkedin.com/in/gudivada-lovekik-8ab603247",
  },
  {
    id: 3,
    imageUrl: SIVA,
    title: "KANCHERLA SIVA KRISHNA MURTHY",
    content: "ArtLex was founded in 1998 as a comprehensive Art Dictionary.",
    buttonLink: "https://www.linkedin.com/in/kancherla-siva-krishna-a2866728a",
  }
  
];

function Team() {
  return (
    <div className="full-height">
      <div className="header">
        <label style={styles.header}>Art Gallery</label>
        <div className="left-side">
          <Link to="/" style={styles.logout}>
            Logout
          </Link>
          <Link to="/profile" style={styles.profile}>
            Profile
          </Link>
          <Link to="/painting" style={styles.painting}>
            Painting
          </Link>
          <Link to="/blog" style={styles.blogs}>
            Blogs
          </Link>
          <Link to="/artist" style={styles.artist}>
            Artists
          </Link>
          <Link to="/team" style={styles.team}>
            Team
          </Link>
          <Link to="/contactus" style={styles.team}>
            Contact Us
          </Link>
          <Link to="/shopping" style={styles.shopping}>
            Shopping
          </Link>
        </div>
      </div>
      <div className="content11" style={{ paddingTop: "50px" }}>
        <h1 style={{ paddingLeft: "10px" }}>Our Team</h1>
        <div className="col-md-12">
          <div className="row">
            {cardData.map((card) => (
              <div key={card.id} className="card" style={{ width: "32rem", margin: "10px"}}>
                <img src={card.imageUrl} className="card-img-top" alt={`Image ${card.id}`} />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.content}</p>
                  <a href={card.buttonLink} target= "_blank" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer" style={{  bottom: '0' }}><span style={{fontSize: '15px', marginRight: '5px'}}>© </span> Copyright 2024, ART GALLERY. All Rights Reserved.</div>
    </div>
  );
}

export default Team;
