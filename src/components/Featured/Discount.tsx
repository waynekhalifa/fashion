import { Box, Typography } from "@mui/material";
import { SunIcon } from "../UI/SvgIcons";

interface Props {}

const Discount: React.FC<Props> = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <SunIcon />
      <Typography variant="h6" sx={{ ml: 3 }}>
        DISCOUNT UP TO 95%
      </Typography>
    </Box>
  );
};

export default Discount;
