import React from "react";
import { Link } from "react-router-dom";
import "./blog.css";

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
    imageUrl: "https://hifructose.com/wp-content/uploads/2024/01/FOR-SITE1for-lola-CROPPED-NO-BARDOCE-HF-V69-FINAL-FRONT-COVER-LOLA-1.jpg",
    title: "Hi-Fructose",
    content: "Hi-Fructose was founded by two artists by the name of Attaboy and Annie Owen in the year 2005.",
    buttonLink: "https://hifructose.com/",
  },
  {
    id: 2,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/da/ARTnews_Cover_February_2014.jpg",
    title: "ARTnews Magazine",
    content: "Artnews is the oldest art magazine in the world.",
    buttonLink: "https://www.artnews.com/",
  },
  {
    id: 3,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ8bnvabA38xhvTw_UY0oToUPrW9096JTPy2501APHnw&s",
    title: "ArtLex",
    content: "ArtLex was founded in 1998 as a comprehensive Art Dictionary.",
    buttonLink: "https://www.artlex.com/",
  },
  {
    id: 4,
    imageUrl: "https://www.newsstand.co.uk/issueimages/535x745/2748425.jpg",
    title: "Artforum",
    content: "Artforum is a New York-based art blog. It revolves around contemporary art and publishes enlightening critiques of visual art exhibitions.",
    buttonLink: "https://www.artforum.com/",
  },
  {
    id: 5,
    imageUrl: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/680xAUTO_original_article_2022_04_62555f6fb297e.jpeg",
    title: "Contemporary Art ",
    content: "Daily As the name suggests, this blog publishes content that talks about contemporary art. Started in the month of November in 2008, readers can expect a minimum of 3 posts from them every day",
    buttonLink: "https://www.contemporaryartdaily.com/",
  },
  // Repeat similar objects for cards 2 to 10 with unique data
];

function Blog() {
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

      <div className="content1">
        <h1>Blogs</h1>
        <div className="blog-container-horizontal">
          {cardData.map((card) => (
            <div key={card.id} className="card" style={{ width: "18rem", margin: "10px" }}>
              <img src={card.imageUrl} className="card-img-top" alt={`Image ${card.id}`} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.content}</p>
                <a href={card.buttonLink} className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer">Copyright @ART GALLERY. All Rights Reserved.</div>
    </div>
  );
}

export default Blog;
