import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Button } from "@mui/material";
import "./banner.css";
import bannerImg from "../../images/banner-image.png";
import { Link } from "react-router-dom";
export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }} className="banner-box">
      <Grid container spacing={0}>
        <Grid className="left-banner" container xs={6}>
          <Grid xs={12}>
            <div className="display-text">
              <h1>
                <h1 className="banner-heading">Create Your Perfect Resume</h1>
              </h1>{" "}
              <h2>Effortlessly Craft Your Professional Profile</h2>
            </div>
          </Grid>
          <Grid xs={12}>
            <div className="get-started">
              <Link to="/create">
                {" "}
                <Button className="get-started-button" variant="contained">
                  {" "}
                  Get started
                </Button>
              </Link>
            </div>
          </Grid>
        </Grid>

        <Grid xs={6}>
          <div className="img-div">
            <img className="banner-img" src={bannerImg} alt="banner here" />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
