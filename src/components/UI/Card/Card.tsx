import { Box, BoxProps } from "@mui/material";

interface Props extends BoxProps {
  children: React.ReactNode;
}

const Card: React.FC<Props> = (props: Props) => {
  const sx: typeof props.sx = {
    background: "#FFFFFF",
    boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: "6px",
    p: 2,
    ...props.sx,
  };

  return <Box sx={sx}>{props.children}</Box>;
};

export default Card;
