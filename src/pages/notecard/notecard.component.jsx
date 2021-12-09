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

   let noteColor = null;
   switch(note.category) {
    case 'work':
    noteColor = yellow[700];
    break;
    case 'money':
    noteColor = green[500];
    break;
    case 'todos':
    noteColor = pink[300];
    break;
    default:
    noteColor = blue[700]
    break;
   }

  return (
    <Card
      elevation={5}
      sx={{ border: note.category === "work" ? "1px solid red" : "" }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{
            backgroundColor: noteColor }} >
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
        <Typography variant="body2" colot="textSecondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
