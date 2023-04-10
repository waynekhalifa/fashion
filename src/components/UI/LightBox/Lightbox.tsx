import Box from "@mui/material/Box";

interface Props {
  children: React.ReactNode;
  scroll?: boolean;
  maxHeight?: string;
}

const LightBox: React.FC<Props> = ({ children, scroll, maxHeight }) => {
  return (
    <Box
      style={scroll ? { maxHeight: maxHeight, overflowY: "scroll" } : {}}
      sx={{
        border: "1px solid",
        borderColor: (theme) => `${theme.palette.divider}`,
        p: 2,
      }}
    >
      {children}
    </Box>
  );
};

export default LightBox;
