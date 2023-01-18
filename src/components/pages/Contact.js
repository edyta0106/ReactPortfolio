import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Container, TextField, Button } from "@mui/material";
import styled from "@emotion/styled";
import "../App.css";

const StyledTextField = styled(TextField)({
  width: "75%",
  marginTop: "1.5rem",
  marginBottom: "1.5rem",
  display: "flex",
  justifyContent: "center",
});

export default function Contact() {
  const [formState, setFormState] = useState({
    userName: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    console.log(formState);
    event.preventDefault();
    setFormState({
      userName: "",
      email: "",
      message: "",
    });
  };

  return (
    <Container className="py-5">
      <h2 className="myH2 my-5 body">Contact Me</h2>
      <Box className="row d-flex justify-content-center" component="form" onSubmit={handleFormSubmit}>
        <StyledTextField
          onChange={handleChange}
          value={formState.userName}
          name="userName"
          type="text"
          id="standard-basic"
          label="Name"
          variant="standard"
        />
        <StyledTextField
          onChange={handleChange}
          value={formState.email}
          name="email"
          type="email"
          id="standard-basic"
          label="Email"
          variant="standard"
        />

        <StyledTextField
          onChange={handleChange}
          value={formState.message}
          name="message"
          type="text"
          id="standard-basic"
          label="Message"
          variant="standard"
        />
        <Box textAlign="center">
          <Button type="submit" sx={{ mt: 5, backgroundColor: "#666", color: "#FFFF" }}>
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
