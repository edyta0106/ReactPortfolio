// import React from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../App.css";
import "../../images/hangry-logo.png";

export default function Portfolio() {
  return (
    <>
      <div className="container">
        <h2 className="myH2 body py-5">Projects</h2>
        <div className="row">
          <div className="col-4 d-flex justify-content-center my-5">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" alt="hamburger" height="170" image={require("../../images/hangry-logo.png")} />
              <CardContent className="bg-secondary text-light">
                <Typography gutterBottom variant="h5" component="div">
                  Hangry
                </Typography>
                <Typography className="text-light" variant="body2" color="text.secondary" fontSize={12}>
                  Are you feeling hungry and it's making you angry? Check out the Hangry app for all your hangry food swings. Search for recipes based
                  on dietary preferences or user craving.
                </Typography>
                <Typography className="text-light" variant="body2" color="text.secondary" fontSize={12} p={2}>
                  Key Tools: HTML, Bootstrap, JavaScript, jQuery, REST APIs, JSON
                </Typography>
              </CardContent>
              <CardActions className="bg-secondary">
                <a href="https://mandiebot.github.io/Hangry/" target="_blank" rel="noopener noreferrer">
                  <Button className="text-info" size="large">
                    Demo
                  </Button>
                </a>
                <a href="https://github.com/MandieBot/Hangry" target="_blank" rel="noopener noreferrer">
                  <Button className="text-info" size="large">
                    GitHub
                  </Button>
                </a>
              </CardActions>
            </Card>
          </div>
          <div className="col-4 d-flex justify-content-center py-5">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" alt="hamburger" height="170" image={require("../../images/DevDive.png")} />
              <CardContent className="bg-secondary text-light">
                <Typography gutterBottom variant="h5" component="div">
                  DevDive
                </Typography>
                <Typography className="text-light" variant="body2" color="text.secondary" fontSize={12}>
                  DevDive allows you to search for jobs in the tech industry based on experience and preferences. Create an account and apply for jobs
                  by following the provided company link in the job description.
                </Typography>
                <Typography className="text-light" variant="body2" color="text.secondary" fontSize={12} p={2}>
                  Key Tools: Node, Express, Handlebars, Sequelize, MySQL, Anime.js, REST APIs
                </Typography>
              </CardContent>
              <CardActions className="bg-secondary">
                <a href="https://dev-dive.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <Button className="text-info" size="large">
                    Demo
                  </Button>
                </a>
                <a href="https://github.com/BluSkreen/DevDive" target="_blank" rel="noopener noreferrer">
                  <Button className="text-info" size="large">
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
                <Typography className="text-light" variant="body2" color="text.secondary" fontSize={12}>
                  Saving up for that dream vacation? Paying down some debt? Setting up a budget just got easier. The Golden Goose Finance app allows
                  you to track all of your expenses on the go with just a few clicks.
                </Typography>
                <Typography className="text-light" variant="body2" color="text.secondary" fontSize={12} p={2}>
                  Key Tools: React, GraphQL, MongoDB, Node, Express, Material UI, JWT, Bcrypt, Chart.js
                </Typography>
              </CardContent>
              <CardActions className="bg-secondary">
                <a href="https://golden-goose-finance.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <Button className="text-info" size="large">
                    Demo
                  </Button>
                </a>
                <a href="https://github.com/edyta0106/Golden-Goose-Finance" target="_blank" rel="noopener noreferrer">
                  <Button className="text-info" size="large">
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
                <Typography className="text-light" variant="body2" color="text.secondary" fontSize={12}>
                  The back end for an e-commerce website that uses the latest technologies. Configured a working Express.js API to use Sequelize to
                  interact with a MySQL database. With this application, a company can now compete with other e-commerce companies.
                </Typography>
              </CardContent>
              <CardActions className="bg-secondary">
                <a href="https://drive.google.com/file/d/1Wb0j5tWoRyV_pEwctaY6-oqDtm_qzLDG/view" target="_blank" rel="noopener noreferrer">
                  <Button className="text-info" size="large">
                    Demo
                  </Button>
                </a>
                <a href="https://github.com/edyta0106/E-CommerceSite" target="_blank" rel="noopener noreferrer">
                  <Button className="text-info" size="large">
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
                <Typography className="text-light" variant="body2" color="text.secondary" fontSize={12}>
                  If you're struggling with remembering your to-do's, this app is just for you. Organize your thoughts and your tasks with this Note
                  Taker app. This application uses an Express.js back end and will save and retrieve note data from a JSON file.
                </Typography>
              </CardContent>
              <CardActions className="bg-secondary">
                <a href="https://shielded-sierra-78661.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <Button className="text-info" size="large">
                    Demo
                  </Button>
                </a>
                <a href="https://github.com/edyta0106/NoteTaker" target="_blank" rel="noopener noreferrer">
                  <Button className="text-info" size="large">
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
                <Typography className="text-light" variant="body2" color="text.secondary" fontSize={12}>
                  Need a way to view and manage the departments, roles, and employees in your company? A great way to organize and plan your business
                  is by using this Employee Tracker app to manage a company's employee database by using Node.js, Inquirer, and MySQL.
                </Typography>
              </CardContent>
              <CardActions className="bg-secondary">
                <a href="https://drive.google.com/file/d/13I6GoqLmKA-VaKFzLGdZLVYZ0_hm0Z02/view" target="_blank" rel="noopener noreferrer">
                  <Button className="text-info" size="large">
                    Demo
                  </Button>
                </a>
                <a href="https://github.com/edyta0106/EmployeeTracker" target="_blank" rel="noopener noreferrer">
                  <Button className="text-info" size="large">
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
