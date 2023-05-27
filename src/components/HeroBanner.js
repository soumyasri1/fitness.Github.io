import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";
import { keyframes } from "@emotion/react";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "100px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "30px", xs: "20px" },
          color: " #804000",
          textShadow: "6px 6px 12px rgba(0, 0, 0, 0.6)", // Increase values for a stronger 3D effect and darker shadow
          marginTop: "150px", // Adjust the value as needed
        }}
        mb="23px"
        mt="30px"
      >
        Age is just a Number. <br />
        Don't make age a barrier and <br />
        start learning with us today :)
        <br />
      </Typography>

      <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
        Check out the most effective exercises personalized to you
      </Typography>
      <Stack>
        <a
          href="#exercises"
          style={{
            marginTop: "45px",
            textDecoration: "none",
            width: "200px",
            textAlign: "center",
            background: "#ff9900",
            padding: "14px",
            fontSize: "22px",
            textTransform: "none",
            color: "black",
            borderRadius: "4px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Add 3D effect with box shadow
            transform: "translateY(0)",
            transition: "transform 0.3s", // Add transition for hover effect
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-3px)"; // Apply transform on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)"; // Reset transform on mouse leave
          }}
        >
          Explore
        </a>
      </Stack>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
        }}
      >
        Exercise
      </Typography>
      <img
        src={HeroBannerImage}
        alt="hero-banner"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
