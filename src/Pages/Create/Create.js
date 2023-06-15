import React, { useEffect, useState } from "react";
import PersonalInfo from "../../components/personal_info/PersonalInfo";
import Education from "../../components/Education/Education";
import Projects from "../../components/Projects/Projects";
import Achievements from "../../components/achievements/achievements";
import Courseworks from "../../components/coursework/CourseWork";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button } from "@mui/material";
import axios from "axios";
import { URL } from "../../App";
import { useNavigate } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
const CreatePage = (props) => {
  const navigate = useNavigate();
  const [detail, setDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    location: "",
    education: [],
    projects: [],
    achievements: [],
    courseworks: [],
    userid: props.user._id,
  });

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleDetailChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(URL + "/create", detail)
      .then((response) => {
        console.log(response.data);
        // setError(response.data.message);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
        //setError(error.response.data.error);
      });
  };
  return (
    <div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Personal Info" value="1" />
              <Tab label="Education" value="2" />
              <Tab label="Projects" value="3" />
              <Tab label="Achievements" value="4" />
              <Tab label="Courseworks" value="5" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <PersonalInfo
              detail={detail}
              handleDetailChange={handleDetailChange}
              setValue={setValue}
            />
          </TabPanel>
          <TabPanel value="2">
            <Education
              detail={detail}
              setDetails={setDetails}
              setValue={setValue}
            />
          </TabPanel>
          <TabPanel value="3">
            <Projects
              setDetails={setDetails}
              detail={detail}
              setValue={setValue}
            />
          </TabPanel>
          <TabPanel value="4">
            <Achievements
              setDetails={setDetails}
              detail={detail}
              setValue={setValue}
            />
          </TabPanel>
          <TabPanel value="5">
            <Courseworks setDetails={setDetails} detail={detail} />
            <Button onClick={handleSubmit}>Submit</Button>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};
export default CreatePage;
