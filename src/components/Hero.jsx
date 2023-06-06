import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const spanStyle = {
  padding: "16px",
  background: "gray",
  color: "#dfdfdfdf",
  fontSize: "24px"
};
const divStyle = {
  display: "flex",
  alignItems: "end",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px"
};
const slideImages = [
  {
    url: "https://wallpapers.com/images/high/2019-indian-cricket-players-g8wl4uwm62bu7830.webp",
    caption: "Slide 1"
  },
  {
    url: "https://static.toiimg.com/photo/msid-90994439/90994439.jpg",
    caption: "Slide 2"
  },
  {
    url: "https://cdn.wionews.com/sites/default/files/styles/story_page/public/2023/02/17/333118-ipl-2023-retention-chennai-super-kings-csk-retained-and-released-players-list.jpg",
    caption: "CSK wins IPL 2023. Bags the cup for the fifth time."
  }
];

export default function Hero() {
  return (
    <div className='slide-container'>
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
              <span style={spanStyle}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
