import { Button, ButtonProps } from "@mui/material";

interface Props extends ButtonProps {
  children: React.ReactNode | string;
}

const FormButton: React.FC<Props> = (props: Props) => {
  const sx: typeof props.sx = { ...props.sx, minWidth: 120 };

  return (
    <Button {...props} variant="contained" sx={sx}>
      {props.children}
    </Button>
  );
};

export default FormButton;
