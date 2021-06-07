import React from "react";
import "./Courses.css";
import { Link } from "react-router-dom";
import c1 from "../../../images/c1.jpg";
import c2 from "../../../images/c2.jpg";
import c3 from "../../../images/c3.jpg";
import c4 from "../../../images/c4.jpg";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const Courses = () => {
  return (
    <div className="container mt-5 pt-5 mb-4">
      <h1 className="text-dark text-center fs-1 fw-bold">Some Courses</h1>
      <div className="row d-flex g-5 mt-3 pt-3">
        <div className=" col-md-6">
          <Card className="container" style={{ height: "830px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="c1"
                height="100%"
                image={c1}
                title="c1"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="h4">
                  Science Course
                </Typography>
                <Typography  variant="h6" component="h6">
                  Enjoy a wide range of information and fun science facts that
                  are sure to surprise and amaze you.
                </Typography>
                <Typography  variant="h5" component="h5">
                  Course duration- 1 month
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <button
                className="btn btn-warning p-2 fw-bold fs-4 ms-1 mb-4"
                type="button"
              >
                <Link
                  className="text-white"
                  to="/courses"
                  style={{ textDecoration: "none" }}
                >
                  Enroll Now
                </Link>
              </button>
            </CardActions>
          </Card>
        </div>
        <div className=" col-md-6">
          <Card className="container" style={{ height: "830px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="c2"
                height="100%"
                image={c2}
                title="c2"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="h4">
                  Mathematics Course
                </Typography>
                <Typography  variant="h6" component="h6">
                  Get introductions to algebra, geometry, trigonometry,
                  pre-calculus and calculus or get help with current math
                  coursework
                </Typography>
                <Typography  variant="h5" component="h5">
                  Course duration- 3 month
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <button
                className="btn btn-warning p-2 fw-bold fs-4 ms-1 mb-4"
                type="button"
              >
                <Link
                  className="text-white"
                  to="/courses"
                  style={{ textDecoration: "none" }}
                >
                  Enroll Now
                </Link>
              </button>
            </CardActions>
          </Card>
        </div>
      </div>
      <div className="row g-5 mt-3 pt-3">
        <div className=" col-md-6">
          <Card className="container" style={{ height: "700px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="c3"
                height="100%"
                image={c3}
                title="c3"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="h4">
                  Art and Music Course
                </Typography>
                <Typography  variant="h6" component="h6">
                  Enjoy a wide range of information and fun art and music that
                  are sure to surprise and amaze you.
                </Typography>
                <Typography  variant="h5" component="h5">
                  Course duration- 6 month
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <button
                className="btn btn-warning p-2 fw-bold fs-4 ms-1 mb-4"
                type="button"
              >
                <Link
                  className="text-white"
                  to="/courses"
                  style={{ textDecoration: "none" }}
                >
                  Enroll Now
                </Link>
              </button>
            </CardActions>
          </Card>
        </div>
        <div className=" col-md-6">
          <Card className="container" style={{ height: "700px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="c4"
                height="100%"
                image={c4}
                title="c4"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="h4">
                  Physical Education Course
                </Typography>
                <Typography  variant="h6" component="h6">
                  Students will learn several creative new ideas and games.
                  These activities could be used to help keep groups physically
                  active.
                </Typography>
                <Typography  variant="h5" component="h5">
                  Course duration- 3 month
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <button
                className="btn btn-warning p-2 fw-bold fs-4 ms-1 mb-4"
                type="button"
              >
                <Link
                  className="text-white"
                  to="/courses"
                  style={{ textDecoration: "none" }}
                >
                  Enroll Now
                </Link>
              </button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Courses;
