import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import image1 from "../img/la.jpg";
import image2 from "../img/ny.jpg";

const images = [
  {
    img: image1,
    id: 1,
    ref: "mehregan.jsx"
  },
  {
    img: image2,
    id: 2,
    ref: "daha.jsx"
  }
];

const useStyles = makeStyles(theme => ({
  line: {
    textAlign: "center",
    margin: 80,
    whiteSpace: "nowrap"
  },
  line2: {
    display: "inlineBlock"
  }
}));

function Brand() {
  const classes = useStyles();
  return (
    <div>
      <h1>brand logo</h1>

      <ul className={classes.line}>
        {images.map(image => (
          <li key={image.id} className={classes.line2}>
            <a href="image.ref">
              <img src="`url(${image.img})`"></img>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Brand;
