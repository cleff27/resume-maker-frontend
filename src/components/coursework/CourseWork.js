import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
const Courseworks = (props) => {
  const [Courseworks, setCourseworks] = useState([
    ...props.detail.courseworks,
    { value: "" },
  ]);
  const handlecourseChange = (index, event) => {
    const newCourseworks = [...Courseworks];
    const value = event.target.value;
    newCourseworks[index].value = value;
    setCourseworks(newCourseworks);
    props.setDetails((prev) => {
      return {
        ...prev,
        courseworks: newCourseworks,
      };
    });
  };

  const handleAddcourseField = () => {
    setCourseworks([...Courseworks, { value: "" }]);
  };
  const handleDeleteCourseworks = (index) => {
    setCourseworks(Courseworks.filter((_, i) => i !== index));
  };
  return (
    <div>
      {Courseworks.map((course, index) => (
        <Box
          key={index}
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            name="title"
            value={course.value}
            onChange={(event) => handlecourseChange(index, event)}
            label="Your course"
          />
          {Courseworks.length > 1 ? (
            <Button onClick={() => handleDeleteCourseworks(index)}>
              Delete
            </Button>
          ) : null}
        </Box>
      ))}
      <Button onClick={handleAddcourseField}>Add course</Button>
    </div>
  );
};

export default Courseworks;
