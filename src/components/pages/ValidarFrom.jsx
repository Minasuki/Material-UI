import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const ValidarFrom = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const emailValidation = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!emailValidation(email)) {
      setError({
        error: true,
        message: "El email no es valido",
      });
      return;
    }
    console.log(email);
    setError({
      error: false,
      message: "",
    });
  };

  return (
    <>
      <h1>Register</h1>
      <Box component="form" onSubmit={onSubmit} autoComplete="off">
        <TextField
          label="Email"
          variant="outlined"
          id="email"
          type="email"
          fullWidth
          required
          error={error.error}
          helperText={error.message}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Button variant="outlined" type="submit" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </>
  );
};
export default ValidarFrom;
