import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Resume from "../../Pages/GeneratedResume/GeneratedResume2";
import axios from "axios";
import { URL } from "../../App";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
function PDFdownload(props) {
  const { id } = useParams();
  const [dataRequired, setdatareq] = useState([]);
  const [available, setAvailable] = useState(false);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setloading(true);
    axios
      .get(URL + "/resume/" + id)
      .then((response) => {
        setdatareq(response.data);
        setAvailable(true);
      })
      .finally(() => {
        setloading(false);
      });
  }, [id]);
  return loading ? (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  ) : available ? (
    <Resume data={dataRequired} />
  ) : (
    "not available"
  );
}

export default PDFdownload;
