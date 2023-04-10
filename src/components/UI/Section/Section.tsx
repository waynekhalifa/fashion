import { Box, BoxProps } from "@mui/material";

interface Props extends BoxProps {
  children: React.ReactNode;
}

const Section: React.FC<Props> = (props: Props) => {
  const sx: typeof props.sx = { py: 9, ...props.sx };

  return <Box sx={sx}>{props.children}</Box>;
};

export default Section;
