import Link from "next/link";
import { Box } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

interface Props {
  link: string;
  text: string;
  fontWeight?: number;
  showIcon?: boolean;
}

const NextLink: React.FC<Props> = ({ link, text, fontWeight, showIcon }) => {
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
          fontWeight: fontWeight ? fontWeight : 400,
        },
      }}
    >
      {showIcon && (
        <KeyboardDoubleArrowLeftIcon
          sx={{ transform: "scale(0.8)", mb: "4px" }}
        />
      )}
      <Link href={link}>{text}</Link>
    </Box>
  );
};

export default NextLink;
