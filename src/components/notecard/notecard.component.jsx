import React from "react";
// components
import { Box } from "@mui/system";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material";
import { DeleteTwoTone } from "@mui/icons-material";
import { blue, green, pink, yellow } from "@mui/material/colors";

const NoteCard = ({ note, handleDelete }) => {
  // This:
  let noteColor = null;
  switch (note.category) {
    case "work":
      noteColor = yellow[700];
      break;
    case "money":
      noteColor = green[500];
      break;
    case "todos":
      noteColor = pink[300];
      break;
    default:
      noteColor = blue[700];
      break;
  }
  // Instead of this:
  /*
   const useStyles = makeStyles({
    avatar: {
      backgroundColor: (note) => {
        if (note.category == 'work') {
          return yellow[700]
        }
        if (note.category == 'money') {
          return green[500]
        }
        if (note.category == 'todos') {
          return pink[500]
        }
        return blue[500]
      },
    }
  })
   */

  return (
    <Box>
      <Card
        elevation={5}
        sx={{ border: note.category === "work" ? "1px solid red" : "" }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{
                backgroundColor: noteColor,
              }}
            >
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteTwoTone />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default NoteCard;
