import React from "react";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        px: "20px",
      }}
    >
      <Stack direction="row" alignItems="center">
        <Link to="/" style={{ position: "absolute", top: 10, left: 0 }}>
          <img
            src={Logo}
            alt="logo"
            style={{
              width: "58px",
              height: "58px",
              marginright: "5px",
            }}
          />
        </Link>
        <Typography
          variant="h6"
          sx={{
            fontSize: { lg: "34px", xs: "32px" },
            color: "black",
            marginTop: "-20px",
            marginLeft: "20px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Add text shadow for 3D effect
          }}
        >
          FitnessGuru
        </Typography>
      </Stack>

      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        sx={{
          fontSize: { lg: "24px", xs: "22px" },
        }}
        alignItems="center"
      >
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Typography>
        <Typography
          variant="h6"
          component="a"
          href="#exercises"
          sx={{
            textDecoration: "none",
            color: "#3A1212",
          }}
        >
          Exercises
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Navbar;
