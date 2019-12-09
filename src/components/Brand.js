import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import image1 from "../img/la.jpg";
import image2 from "../img/ny.jpg";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

const images = [
  {
    img: image1,
    id: 1,
    title: "mehregan",
    width: "20%"
  },
  {
    img: image2,
    id: 2,
    title: "daha",
    width: "20%"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 300,
    width: "100%"
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        border: "4px solid currentColor"
      }
    }
  },
  uiStyle: {
    whiteSpace: "nowrap",
    marginTop: 40
  },
  liStyle: {
    display: "inline",
    margin: 40,
    "&:hover": {
      position: "relative",
      top: -4
    }
  }
}));

const defaultProps = {
  bgcolor: "background.paper",
  m: 1,
  paddingRight: 10,
  paddingLeft: 10,
  paddingTop: 1,
  paddingBottom: 1,
  borderColor: "text.primary"
};

function Brand() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <br />
      <h1>لوگوی سارمان ها</h1>
      <Box border={1} {...defaultProps}>
        <ui className={classes.uiStyle}>
          {images.map(image => (
            <li className={classes.liStyle}>
              <ButtonBase
                key={image.title}
                className={classes.image}
                style={{
                  width: image.width
                  // float: "right"
                }}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${image.img})`
                  }}
                />

                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                >
                  <span />
                </Typography>
              </ButtonBase>
            </li>
          ))}
        </ui>
      </Box>
    </div>
  );
}

export default Brand;
