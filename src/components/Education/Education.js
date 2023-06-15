import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container, Grid } from "@mui/material";
const Education = (props) => {
  const [education, setEducation] = useState([
    { institute: "", degree: "", grade: "", startDate: "", endDate: "" },
  ]);
  const handleEducationChange = (index, event) => {
    const educations = [...education];
    const name = event.target.name;
    const value = event.target.value;
    const obj = { ...educations[index], [name]: value };
    educations[index] = obj;
    setEducation(educations);
    props.setDetails((prev) => {
      return {
        ...prev,
        education: educations,
      };
    });
  };
  const handleDeleteEducation = (index) => {
    setEducation(education.filter((_, i) => i !== index));
  };
  const handleAddCourseField = () => {
    setEducation([
      ...education,
      { institute: "", degree: "", grade: "", startDate: "", endDate: "" },
    ]);
  };
  return (
    <div>
      <Container component="main" maxWidth="xs">
        {education.map((course, index) => (
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
                  name="institute"
                  value={course.institute}
                  onChange={(event) => handleEducationChange(index, event)}
                  label="Institute"
                  fullWidth
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  name="degree"
                  value={course.degree}
                  onChange={(event) => handleEducationChange(index, event)}
                  label="Degree"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  name="grade"
                  value={course.grade}
                  onChange={(event) => handleEducationChange(index, event)}
                  label="Grade"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="startDate"
                  value={course.startDate}
                  onChange={(event) => handleEducationChange(index, event)}
                  label="Start Date"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="endDate"
                  value={course.endDate}
                  onChange={(event) => handleEducationChange(index, event)}
                  label="End Date"
                  fullWidth
                />
              </Grid>
              <Grid item xs={8}></Grid>
              <Grid item xs={4}>
                {education.length > 1 ? (
                  <Button onClick={() => handleDeleteEducation(index)}>
                    Delete
                  </Button>
                ) : null}
              </Grid>
            </Grid>
          </Box>
        ))}
        <Button onClick={handleAddCourseField}>Add Education</Button>
        <Button
          onClick={() => {
            props.setValue("3");
          }}
        >
          next
        </Button>
      </Container>
    </div>
  );
};

export default Education;
