// import React from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "../App.css";
import "../../images/hangry-logo.png";

export default function Portfolio() {
  return (
    <>
      <Link to="/portfolio"></Link>
      <div className="container">
        <div className="row">
          <div className="col my-5">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" alt="hamburger" height="170" image={require("../../images/hangry-logo.png")} />
              <CardContent className="bg-secondary text-light">
                <Typography gutterBottom variant="h5" component="div">
                  Hangry
                </Typography>
                <Typography className="text-light" variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions className="bg-secondary">
                <a href="https://mandiebot.github.io/Hangry/" target="_blank" rel="noopener noreferrer">
                  <Button className="text-info" size="small">
                    Demo
                  </Button>
                </a>
                <a href="https://github.com/MandieBot/Hangry" target="_blank" rel="noopener noreferrer">
                  <Button className="text-info" size="small">
                    GitHub
                  </Button>
                </a>
              </CardActions>
            </Card>
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}
