import React, {useState} from "react";
import { Link as RouterLink } from "react-router-dom";
import {Container, Typography, Link, Box, Divider, Button, TextField} from "@mui/material";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import axios from "axios";

//////////////////////////////////
const RootStyle = styled("div")({
  background: "rgb(24,22,22)",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const HeadingStyle = styled(Box)({
  textAlign: "center",
});

const ContentStyle = styled("div")({
  maxWidth: 480,
  padding: 25,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "rgb(67,35,100)",
});

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:8000/user/login/', {
        username,
        password
      });
      const { data } = response;
      console.log("Login successful:", data);

    } catch (err) {
      setError("Failed to login. Please check your credentials and try again.");
      console.error("Login error:", err);
    }
    setLoading(false);
  };

  return (
      <RootStyle>
        <Container maxWidth="sm" sx={{borderRadius:10}}>
          <ContentStyle>
            <HeadingStyle component={motion.div} {...fadeInUp}>

              <Typography sx={{  mb: 5, fontSize:30 }}>
                Login to your account
              </Typography>
            </HeadingStyle>

            <Divider sx={{ my: 3 }} component={motion.div} {...fadeInUp}></Divider>

            <form onSubmit={handleLogin}>
              <Box sx={{mb: 2}}>
                <TextField
                    fullWidth
                    label="Username"
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
              </Box>
              <Box sx={{mb: 2}}>
                <TextField
                    fullWidth
                    type="password"
                    label="Password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
              </Box>
              <Link variant="subtitle2" component={RouterLink} to="/dashboard">
                <Button type="submit" variant="contained" color="primary" disabled={loading} sx={{marginLeft: 22.5}}>
                  Login
                </Button>
              </Link>
              {error && <p style={{color: "red"}}>{error}</p>}
            </form>

            <Typography
                component={motion.p}
                {...fadeInUp}
                variant="body2"
                align="center"
                sx={{mt: 3}}
            >
            </Typography>

          </ContentStyle>
        </Container>
      </RootStyle>
    );
};

export default Login;
