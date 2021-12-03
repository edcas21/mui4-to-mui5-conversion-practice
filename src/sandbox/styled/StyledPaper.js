import { Paper } from "@mui/material";
import { styled } from "@mui/system";

const StyledPaper = styled(Paper, {
  // Useful for debugging, creates a css name dynamically according to the values you've passed in
  name: "StyledPaper",
  slot: "Wrapper",
})({
  color: "#6B8068",
  backgroundColor: "silver",
  margin: "auto",
  borderRadius: 2,
  height: 300,
  width: 300,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // Nested selector targeting MUI css classes
  ".MuiButton-root": { color: "#FF0000" },
  // backgroundImage: `url("https://picsum.photos/300/300")`,
});

const StyledPaper2 = styled(Paper, { name: "StyledPaper2", slot: "Wrapper" })`
  color: red;
  background-color: silver;
  margin: auto;
  border-radius: 2;
  height: 300px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-image: url("https://picsum.photos/300/300");
`;

export { StyledPaper, StyledPaper2 };
