import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { Link as MuiLink } from "@mui/material";
import Link from "next/link";

interface Props {
  link: string;
  text: string;
}

const Component: React.FC<Props> = ({ link, text }) => {
  return (
    <Link href={link}>
      <MuiLink
        underline="none"
        component="span"
        sx={{
          color: { xs: "grey.100", sm: "common.white" },
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
        }}
      >
        <KeyboardDoubleArrowLeftIcon
          sx={{ transform: "scale(0.8)", mb: "4px" }}
        />
        {text}
      </MuiLink>
    </Link>
  );
};

export default Component;
