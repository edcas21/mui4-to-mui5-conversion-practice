import React from "react";
import { Box, styled, } from "@mui/system";
import { Typography, Button, ButtonGroup, Container } from "@mui/material";
import {
  AcUnit,
  AcUnitOutlined,
  Send,
  KeyboardArrowRight,
  Keyboard,
} from "@mui/icons-material";

/* Notes:
- Container adds some bake in margin and padding to your content
*/
const Create = () => {
  return (
    // <Box>
    <Container>
      {/* 
      <Typography 
      variant="h1"
      color="primary"
      align="center"
      >
      Create a new note</Typography> */}
      {/* <Typography color="secondary" noWrap>
        Donec pulvinar interdum egestas. Nulla mollis, risus hendrerit dignissim
        commodo, augue velit cursus lectus, et luctus ipsum urna in ante. Nulla
        posuere malesuada ligula, et pellentesque leo rutrum nec. Curabitur in
        vehicula orci. Aliquam enim eros, pharetra eu dolor at, porttitor
        bibendum nisi. Sed iaculis arcu a odio tempor volutpat. Ut ornare, nulla
        ut vestibulum mattis, odio quam iaculis dolor, vitae sagittis metus
        sapien quis sem. Duis rutrum sapien lectus.
      </Typography> */}
      {/* <Button type="submit" variant="contained">Submit</Button>
      <Button type="submit" variant="outlined" color="secondary" disableElevation>Submit</Button>

      <ButtonGroup color="secondary" variant="contained"> 
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <Button
        onClick={() => console.log("you clicked me")}
        type="submit"
        color="secondary"
        variant="contained"
        startIcon={<Send />}
        endIcon={<KeyboardArrowRight />}
      >
        Submit
      </Button>

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
