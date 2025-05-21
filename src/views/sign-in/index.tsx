import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/use-auth";
import { useNavigate } from "react-router";

import { SignInBox, SignInInfo, EcoLtshLogo } from "./index.styled.ts";
import forestImg from "../../assets/forest4.jpg";

// Icons
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import KeyIcon from "@mui/icons-material/Key";

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
        <EcoLtshLogo
          variant="h3"
          fontWeight="bold"
          color="primary"
          sx={{ WebkitTextStroke: "1px black" }}
        >
          ECO-L🌲SH
        </EcoLtshLogo>

        <SignInInfo
          type="email"
          name="email"
          startAdornment={<AlternateEmailIcon sx={{ mx: 1 }} />}
          placeholder="E-Mail"
          disableUnderline
          onChange={(e) => setEmail(() => e.target.value)}
          value={email}
        />

        <SignInInfo
          type="password"
          name="password"
          startAdornment={<KeyIcon sx={{ mx: 1 }} />}
          placeholder="Password"
          disableUnderline
          onChange={(e) => setPassword(() => e.target.value)}
          value={password}
        />

        <Button
          variant="outlined"
          sx={{
            backgroundColor: "secondary.main",
            color: "#8ec07c",
            "&:hover": {
              backgroundColor: "secondary.light",
              color: "secondary.main",
            },
          }}
          onClick={handleSubmit}
        >
          Log In
        </Button>
      </SignInBox>
    </Box>
  );
};

export default SignIn;
