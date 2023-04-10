import { Box, Typography } from "@mui/material";

interface Props {
  children: React.ReactNode;
  maxWidth: string;
  disableDivider?: boolean;
  disableMargin?: boolean;
  align?: "left" | "center" | "right";
  component?: any;
  color?: string;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline";
}

const SectionTitle: React.FC<Props> = ({
  children,
  disableDivider,
  disableMargin,
  maxWidth,
  align,
  variant,
  component,
  color,
}) => {
  return (
    <>
      <Typography
        variant={variant ? variant : "h5"}
        component={component ? component : "h2"}
        fontWeight={700}
        align={align ? align : "left"}
        color={color ? color : "textPrimary"}
        sx={{ maxWidth }}
      >
        {children}
      </Typography>
      {!disableDivider && (
        <Box
          sx={{
            backgroundColor: "primary.main",
            width: 64,
            height: 4,
            mb: disableMargin ? 0 : 4,
          }}
        />
      )}
    </>
  );
};

export default SectionTitle;
