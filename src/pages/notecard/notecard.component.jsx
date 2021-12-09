import React from "react";
// components
import { Box } from "@mui/system";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { DeleteTwoTone } from "@mui/icons-material";

const NoteCard = ({ note, handleDelete }) => {
  return (
    <Card
      elevation={5}
      sx={{ border: note.category === "work" ? "1px solid red" : "" }}
    >
      <CardHeader
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
