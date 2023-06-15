import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container, Grid } from "@mui/material";
const Projects = (props) => {
  const [projects, setProjects] = useState([
    { title: "", stack: "", detail: "", startDate: "", endDate: "" },
  ]);
  const handleProjectChange = (index, event) => {
    const newprojects = [...projects];
    const name = event.target.name;
    const value = event.target.value;
    const obj = { ...newprojects[index], [name]: value };
    newprojects[index] = obj;
    setProjects(newprojects);
    props.setDetails((prev) => {
      return {
        ...prev,
        projects: newprojects,
      };
    });
  };
  const handleDeleteprojects = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };
  const handleAddProjectField = () => {
    setProjects([
      ...projects,
      { title: "", stack: "", detail: "", startDate: "", endDate: "" },
    ]);
  };
  return (
    <div>
      <Container component="main" maxWidth="xs">
        {projects.map((project, index) => (
          <Box
            key={index}
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
              <Grid item xs={12}>
                <TextField
                  name="title"
                  value={project.title}
                  onChange={(event) => handleProjectChange(index, event)}
                  label="Project Name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="stack"
                  value={project.stack}
                  onChange={(event) => handleProjectChange(index, event)}
                  label="Tech Stack Used"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="detail"
                  value={project.detail}
                  onChange={(event) => handleProjectChange(index, event)}
                  label="About your project"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="startDate"
                  value={project.startDate}
                  onChange={(event) => handleProjectChange(index, event)}
                  label="Start Date"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="endDate"
                  value={project.endDate}
                  onChange={(event) => handleProjectChange(index, event)}
                  label="End Date"
                  fullWidth
                />
              </Grid>
              <Grid item xs={8}></Grid>
              <Grid item xs={4}>
                {projects.length > 1 ? (
                  <Button onClick={() => handleDeleteprojects(index)}>
                    Delete
                  </Button>
                ) : null}
              </Grid>
            </Grid>
          </Box>
        ))}

        <Button onClick={handleAddProjectField}>Add Project</Button>
        <Button
          onClick={() => {
            props.setValue("4");
          }}
        >
          next
        </Button>
      </Container>
    </div>
  );
};

export default Projects;
