import React, { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../../App";
import TableForm from "../../components/table/Table";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
function MyResumes(props) {
  const [dataRequired, setdatareq] = useState([]);
  const [loading, setloading] = useState(false);
  const [reload, setreload] = useState(false);
  useEffect(() => {
    setloading(true);
    window.scrollTo(0, 0);
    axios
      .get(URL + "/myresumes/" + props.user._id)
      .then((response) => {
        setdatareq(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setloading(false);
      });
  }, [props.user._id, reload]);
  const onDelete = () => {
    setreload(!reload);
  };
  return (
    <div>
      {loading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : dataRequired.length > 0 ? (
        <div>
          <TableForm data={dataRequired} onDelete={onDelete} />
        </div>
      ) : (
        <h1>no result</h1>
      )}
    </div>
  );
}

export default MyResumes;
