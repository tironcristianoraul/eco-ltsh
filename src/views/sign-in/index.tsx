import { Box, Button, Input } from "@mui/material";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/use-auth";
import { useNavigate } from "react-router";

import { SignInBox } from "./index.styled.ts";
import forestImg from "../../assets/forest3.jpg";

export interface SignInInputs {
  email: string;
  password: string;
}

const SignIn = () => {
  const navigate = useNavigate();

  const { login, isLoggedIn } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    login({
      email: email,
      password: password,
    });
  };

  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn, navigate]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${forestImg})`,
        backgroundSize: "cover",
      }}
    >
      <SignInBox>
        <Input
          type="email"
          name="email"
          onChange={(e) => setEmail(() => e.target.value)}
          value={email}
        />
        <Input
          type="password"
          name="password"
          onChange={(e) => setPassword(() => e.target.value)}
          value={password}
        />
        <Button onClick={handleSubmit}>Logare</Button>
      </SignInBox>
    </Box>
  );
};

export default SignIn;
