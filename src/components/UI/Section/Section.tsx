import Box from "@mui/material/Box";
import React from "react";

interface Props {
  background: string;
  children: React.ReactNode;
}

const Section: React.FC<Props> = ({ background, children }) => (
  <Box
    component="section"
    sx={{
      pt: 9,
      pb: 9,
      background,
    }}
  >
    {children}
  </Box>
);

export default Section;
