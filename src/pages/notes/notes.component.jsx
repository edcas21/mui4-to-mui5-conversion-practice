import React, { useEffect, useState } from "react";
// components
import { Box } from "@mui/system";
import { Grid, Paper } from "@mui/material";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  /* 
  Hook - Allow you to pull away different pieces of complexity from functional components. They are regular functions that you can import directly from the react library and call inside your components.

  useEffect - A hook that is used for wrapping around code that has 'side effects,' and acts like a combination of the component lifecycle methods; componentDidMount, componentDidUpdate, componentWillMount.

  componentDidUpdate - Called right after the component has been updated.

  componentDidMount - Called right after the component has been mounted.

  componentWillMount - Called just before the component is mounted.
  */

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json()) // parses the data received from the endpoint
      .then((data) => setNotes(data)); // passes that data over to be used for the state
  }, []); // The empty array tells it to only run the provided code once
  return (
    <Box>
      {/* <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>4</Paper>
        </Grid>
      </Grid> */}
      <Grid container>
        {notes.map((note) => (
          <Grid key={note.id} item xs={12} sm={6} md={3}>
            <Paper>{note.title}</Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Notes;

//  What the grid configuration will be for the 3 sections on the intranet homepage
{
  /* <Grid container>
  <Grid item xs={12} sm={4} md={4}>
    <Paper>1</Paper>
  </Grid>
  <Grid item xs={12} sm={4} md={4}>
    <Paper>2</Paper>
  </Grid>
  <Grid item xs={12} sm={4} md={4}>
    <Paper>3</Paper>
  </Grid>
</Grid>; */
}
