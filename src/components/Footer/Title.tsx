import { Typography } from "@mui/material";

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <Typography variant="h6" paragraph>
      {children}
    </Typography>
  );
};

export default Title;
