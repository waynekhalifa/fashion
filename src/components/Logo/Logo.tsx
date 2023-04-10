import Link from "next/link";
import { Box, Typography } from "@mui/material";

const Logo: React.FC = () => {
  return (
    <Box
      component="span"
      sx={{
        display: "flex",
        alignItems: "center",
        a: {
          textDecoration: "none",
          color: "inherit",
          display: "block",
        },
      }}
    >
      <Link href={"/"}>
        <Typography variant="h6">Blas.Blus</Typography>
      </Link>
    </Box>
  );
};

export default Logo;
