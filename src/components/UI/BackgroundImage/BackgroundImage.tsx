import { Box, Container } from "@mui/material";
import React from "react";

interface Props {
  imageURL: string;
  spacing: number;
  children: React.ReactNode;
}

const BackgroundImage: React.FC<Props> = ({ imageURL, spacing, children }) => {
  const renderSpacing = () => {
    return { xs: 4, md: 4 };
  };

  return (
    <Box
      sx={{
        position: "relative",
        color: "common.white",
        backgroundImage: `url(${imageURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        py: renderSpacing,
      }}
    >
      <Container>{children}</Container>
    </Box>
  );
};

export default BackgroundImage;
