import React from "react";
import ReactDOM from "react-dom";
import { SimpleImg } from "react-simple-img";
import image1 from "./wallpapers/Isles.jpg";
import image2 from "./wallpapers/Lake.jpg";
import image3 from "./wallpapers/Mountain-Range.jpg";
import image4 from "./wallpapers/Pink-Forest.jpg";
import image5 from "./wallpapers/Snow.jpg";
import image6 from "./wallpapers/Lion.jpg";
import "./styles.css";

const imgDummy = {
  background: "linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)"
};

const images = [
  {
    img: image1,
    svg: imgDummy.background
  },
  {
    img: image2,
    svg: imgDummy.background
  },
  {
    img: image3,
    svg: imgDummy.background
  },
  {
    img: image4,
    svg: imgDummy.background
  },
  {
    img: image5,
    svg: imgDummy.background
  },
  {
    img: image6,
    svg: imgDummy.background
  }
];

function App() {
  const devStyle = {
    width: "300px",
    marginLeft: "auto",
    marginRight: "auto"
  };
  return (
    <div className="App">
      <h1>Hiii!</h1>
      <p>Test</p>
      {images.map((data, index) => (
        <div key={index} style={devStyle}>
          <h1>{index}</h1>
          <SimpleImg
            src={data.img}
            placeholder={data.svg}
            animationDuration={3}
            height={300}
            width={300}
          />
        </div>
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
