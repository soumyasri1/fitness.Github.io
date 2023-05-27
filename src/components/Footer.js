import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

import Logo from "../assets/images/MyProjectLogo.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor=" #ffe066">
      <Stack gap="20px" alignItems="center" px="10px" pt="24px">
        <Typography variant="h6" x>
          We are with you in your fitness journey
        </Typography>
        <Box
          mb="20px"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          width="240px"
        >
          <a
            style={{ color: "black" }}
            href="https://github.com/soumyasri1"
            target="_blank"
          >
            <GitHub fontSize="large" />
          </a>
          <a
            style={{ color: "blue" }}
            href="https://www.linkedin.com/in/soumya-sri-232a29151/"
            target="_blank"
          >
            <LinkedIn fontSize="large" />
          </a>
          <a
            style={{ color: "purple" }}
            href="https://www.instagram.com"
            target="_blank"
          >
            <Instagram fontSize="large" />
          </a>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
