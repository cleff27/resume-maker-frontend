import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { URL } from "../../App";
import axios from "axios";
export default function TableForm(props) {
  const handleDelete = (resumeid) => {
    if (
      window.confirm(
        `Are you sure you want to delete the course ${props.title}?\nOnce deleted it cannot be recovered, We suggest you to Update the course instead`
      )
    ) {
      axios
        .delete(URL + `/resumes/${resumeid}`)
        .then((res) => {
          props.onDelete(resumeid);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row, index) => (
            <TableRow
              key={row.fname}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.fname}
              </TableCell>
              <TableCell>{row.lname}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>
                <Link to={"/view/" + row._id}>view</Link>
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    handleDelete(row._id);
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
