import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Box
} from "@mui/material";

function Task23_MUIPractice() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = () => {
    setSubmittedName(name);
    setName("");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f0f0f0"
    >
      <Card sx={{ width: 400, padding: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Enter Your Name
          </Typography>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            Submit
          </Button>
          {submittedName && (
            <Typography sx={{ mt: 2 }} color="success.main">
              Hello, {submittedName}!
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default Task23_MUIPractice;
