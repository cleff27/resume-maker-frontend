import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
const Achievements = (props) => {
  const [Achievements, setAchievements] = useState([{ value: "" }]);
  const handleachievementChange = (index, event) => {
    const newAchievements = [...Achievements];
    const value = event.target.value;
    newAchievements[index].value = value;
    setAchievements(newAchievements);
    props.setDetails((prev) => {
      return {
        ...prev,
        achievements: newAchievements,
      };
    });
  };

  const handleAddachievementField = () => {
    setAchievements([...Achievements, { value: "" }]);
  };
  const handleDeleteAchievements = (index) => {
    setAchievements(Achievements.filter((_, i) => i !== index));
  };
  return (
    <div>
      {Achievements.map((achievement, index) => (
        <Box
          key={index}
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            name="title"
            value={achievement.value}
            onChange={(event) => handleachievementChange(index, event)}
            label="Your achievement"
            fullWidth
          />
          {Achievements.length > 1 ? (
            <Button onClick={() => handleDeleteAchievements(index)}>
              Delete
            </Button>
          ) : null}
        </Box>
      ))}
      <Button onClick={handleAddachievementField}>Add achievement</Button>
      <Button
        onClick={() => {
          props.setValue("5");
        }}
      >
        next
      </Button>
    </div>
  );
};

export default Achievements;
