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
          <div className="col-4 d-flex justify-content-center my-5">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" alt="hamburger" height="170" image={require("../../images/hangry-logo.png")} />
              <CardContent className="bg-secondary text-light">
                <Typography gutterBottom variant="h5" component="div">
                  Hangry
                </Typography>
                <Typography className="text-light" variant="body2" color="text.secondary">
                  Are you feeling hungry and it's making you angry? Check out the Hangry app for all your hangry food swings. Search for recipes based
                  on dietary preferences or user craving.
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
          <div className="col-4 d-flex justify-content-center my-5">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" alt="hamburger" height="170" image={require("../../images/DevDive.png")} />
              <CardContent className="bg-secondary text-light">
                <Typography gutterBottom variant="h5" component="div">
                  DevDive
                </Typography>
                <Typography className="text-light" variant="body2" color="text.secondary">
                  DevDive allows you to search for jobs in the tech industry based on experience and preferences. Create an account. Apply for jobs by
                  following the provided company link in job description.
                </Typography>
              </CardContent>
              <CardActions className="bg-secondary">
                <a href="https://dev-dive.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <Button className="text-info" size="small">
                    Demo
                  </Button>
                </a>
                <a href="https://github.com/BluSkreen/DevDive" target="_blank" rel="noopener noreferrer">
                  <Button className="text-info" size="small">
                    GitHub
                  </Button>
                </a>
              </CardActions>
            </Card>
          </div>
          <div className="col-4 d-flex justify-content-center my-5">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" alt="logo" height="170" image={require("../../images/goldengoose.PNG")} />
              <CardContent className="bg-secondary text-light">
                <Typography gutterBottom variant="h5" component="div">
                  Golden Goose Finance
                </Typography>
                <Typography className="text-light" variant="body2" color="text.secondary">
                  Saving up for that dream vacation? Paying down some debt? Setting up a budget just got easier. The Golden Goose Finance app allows
                  you to track all your expenses on the go with just a few clicks.
                </Typography>
              </CardContent>
              <CardActions className="bg-secondary">
                <a href="https://golden-goose-finance.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <Button className="text-info" size="small">
                    Demo
                  </Button>
                </a>
                <a href="https://github.com/edyta0106/Golden-Goose-Finance" target="_blank" rel="noopener noreferrer">
                  <Button className="text-info" size="small">
                    GitHub
                  </Button>
                </a>
              </CardActions>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-4 d-flex justify-content-center my-5">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" alt="logo" height="170" image={require("../../images/E-CommerceSite.png")} />
              <CardContent className="bg-secondary text-light">
                <Typography gutterBottom variant="h5" component="div">
                  E-Commerce Site (Back-End)
                </Typography>
                <Typography className="text-light" variant="body2" color="text.secondary">
                  The back end for an e-commerce website that uses the latest technologies. With this application, a company can now compete with
                  other e-commerce companies.
                </Typography>
              </CardContent>
              <CardActions className="bg-secondary">
                <a href="https://drive.google.com/file/d/1Wb0j5tWoRyV_pEwctaY6-oqDtm_qzLDG/view" target="_blank" rel="noopener noreferrer">
                  <Button className="text-info" size="small">
                    Demo
                  </Button>
                </a>
                <a href="https://github.com/edyta0106/E-CommerceSite" target="_blank" rel="noopener noreferrer">
                  <Button className="text-info" size="small">
                    GitHub
                  </Button>
                </a>
              </CardActions>
            </Card>
          </div>
          <div className="col-4 d-flex justify-content-center my-5">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" alt="logo" height="170" image={require("../../images/NoteTaker.png")} />
              <CardContent className="bg-secondary text-light">
                <Typography gutterBottom variant="h5" component="div">
                  Note Taker
                </Typography>
                <Typography className="text-light" variant="body2" color="text.secondary">
                  If you're struggling with remembering your to-do's, this app is just for you. Organize your thoughts and your tasks with this Note
                  Taker app. Write, save and delete your daily notes.
                </Typography>
              </CardContent>
              <CardActions className="bg-secondary">
                <a href="https://shielded-sierra-78661.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <Button className="text-info" size="small">
                    Demo
                  </Button>
                </a>
                <a href="https://github.com/edyta0106/NoteTaker" target="_blank" rel="noopener noreferrer">
                  <Button className="text-info" size="small">
                    GitHub
                  </Button>
                </a>
              </CardActions>
            </Card>
          </div>
          <div className="col-4 d-flex justify-content-center my-5">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" alt="logo" height="170" image={require("../../images/EmployeeTracker.png")} />
              <CardContent className="bg-secondary text-light">
                <Typography gutterBottom variant="h5" component="div">
                  Employee Tracker (Back-End)
                </Typography>
                <Typography className="text-light" variant="body2" color="text.secondary">
                  Need a way to view and manage the departments, roles, and employees in your company? A great way to organize and plan your business
                  is by using this Employee Tracker app to manage a company's employee database.
                </Typography>
              </CardContent>
              <CardActions className="bg-secondary">
                <a href="https://drive.google.com/file/d/13I6GoqLmKA-VaKFzLGdZLVYZ0_hm0Z02/view" target="_blank" rel="noopener noreferrer">
                  <Button className="text-info" size="small">
                    Demo
                  </Button>
                </a>
                <a href="https://github.com/edyta0106/EmployeeTracker" target="_blank" rel="noopener noreferrer">
                  <Button className="text-info" size="small">
                    GitHub
                  </Button>
                </a>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
