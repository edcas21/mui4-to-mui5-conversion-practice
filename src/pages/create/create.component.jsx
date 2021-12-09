import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// components
import { Box, styled } from "@mui/system";
import {
  Typography,
  Button,
  ButtonGroup,
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
} from "@mui/material";
// icons
import {
  AcUnit,
  AcUnitOutlined,
  Send,
  KeyboardArrowRight,
  Keyboard,
} from "@mui/icons-material";
// styles

import createStyles from "./create.styles";

/*
- <Container> adds some baked in margin and padding to your content
- <Box> wraps your component and creates a new DOM element. By default it creates a new <div>, but can be changed using the component prop.
- sx: All system properties are available via the sx prop. Also allows you to specify any other CSS rules you may need.
*/

/*
Instead of using the makeStyles function, create an object for the styling properties. For each component, create a new object with its respective styling properties. The styling can be in a separate file and then imported like any other object.
*/

// Styling is in the create.styles.js file

const Create = () => {

  // no need for:
  // const classes = useStyles()

  // In react router 6, useHistory is replaced by useNavigate
  const navigate = useNavigate();
  // State
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }

    if (details === "") {
      setDetailsError(true);
    }

    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        // Takes the state values and puts them in an object, stringifies them in order to turn them into a JSON object and then that gets sent over to the database.
        body: JSON.stringify({ title, details, category }),
        // .then(() => history.push('/'))
      }).then(() => navigate("/")); // redirects the user back to the notes page
    }
  };

  return (
    <Container size="sm">
      <Typography
        /* 
      Instead of using className, you can just use the sx prop to pass the component it's respective styling object
      */
        sx={createStyles.title}
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          sx={createStyles.field}
          // className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          sx={createStyles.details}
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />

        <FormControl sx={createStyles.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminders"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

        <Button
          sx={createStyles.btn}
          type="submit"
          color="secondary"
          variant="contained"
          startIcon={<Send />}
          endIcon={<KeyboardArrowRight />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
