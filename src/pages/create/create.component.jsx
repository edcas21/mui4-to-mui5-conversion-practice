import React, { useState } from "react";
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

/* Notes:
- <Container> adds some baked in margin and padding to your content
- <Box> wraps your component and creates a new DOM element. By default it creates a new <div>, but can be changed using the component prop.
- sx: All system properties are available via the sx prop. Also allows you to specify any other CSS rules you may need.
*/

/*
Instead of using the makeStyles function, create an object for the styling properties. For each component, create a new object with its respective styling properties. The styling can be in a separate file and then imported like any other object.
*/

/* styles
 const useStyles = {
   btn: {
     fontSize: 60,
     backgroundColor: "violet",
     "&:hover": {
       backgroundColor: "blue",
     },
   },
   title: {
     textDecoration: "underline",
     marginBottom: 1,
   },
 };
*/

const Create = () => {
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
      console.log(title, details, category);
    }
  };

  return (
    // <Box>
    <Container>
      {/* 
      <Typography 
      variant="h1"
      color="primary"
      align="center"
      >
      Create a new note</Typography> 
      */}
      {/*
      <Typography color="secondary" noWrap>
        Donec pulvinar interdum egestas. Nulla mollis, risus hendrerit dignissim
        commodo, augue velit cursus lectus, et luctus ipsum urna in ante. Nulla
        posuere malesuada ligula, et pellentesque leo rutrum nec. Curabitur in
        vehicula orci. Aliquam enim eros, pharetra eu dolor at, porttitor
        bibendum nisi. Sed iaculis arcu a odio tempor volutpat. Ut ornare, nulla
        ut vestibulum mattis, odio quam iaculis dolor, vitae sagittis metus
        sapien quis sem. Duis rutrum sapien lectus.
      </Typography> 
      */}
      {/*
      <Button type="submit" variant="contained">Submit</Button>
      <Button type="submit" variant="outlined" color="secondary" disableElevation>Submit</Button>

      <ButtonGroup color="secondary" variant="contained"> 
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> 
      */}
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

      {/* icons */}
      {/* 
      <br />
      <AcUnitOutlined />
      <AcUnitOutlined color="secondary" fontSize="large" />
      <AcUnitOutlined color="secondary" fontSize="small" />
      <AcUnitOutlined color="action" />
      <AcUnitOutlined color="error" />
      <AcUnitOutlined color="disabled" /> 
      */}
    </Container>
    // </Box>
  );
};

export default Create;
