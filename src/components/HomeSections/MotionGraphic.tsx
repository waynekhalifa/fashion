import { Box } from "@mui/material";

import placeholder from "@images/motion-graphic.png";

const MotionGraphic: React.FC = () => {
  return (
    <Box
      component="img"
      src={placeholder.src}
      alt="logo"
      sx={{ display: "block", maxWidth: "100%", height: "auto" }}
    />
  );
};

export default MotionGraphic;
