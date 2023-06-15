import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container, Grid } from "@mui/material";

export default function PersonalInfo(props) {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        component="form"
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              name="fname"
              value={props.detail.FName}
              onChange={props.handleDetailChange}
              label="First Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="lname"
              value={props.detail.LName}
              onChange={props.handleDetailChange}
              label="Last Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              value={props.detail.Email}
              onChange={props.handleDetailChange}
              label="Email"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="phone"
              value={props.detail.Phone}
              onChange={props.handleDetailChange}
              label="Contact No."
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="location"
              value={props.detail.Location}
              onChange={props.handleDetailChange}
              label="Location"
              fullWidth
            />
          </Grid>
          <Grid item xs={9}></Grid>
          <Grid item xs={3}>
            <Button
              onClick={() => {
                props.setValue("2");
              }}
            >
              next
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
