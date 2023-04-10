import { IOption } from "@/models/app";
import { Checkbox, Grid, Typography } from "@mui/material";

interface VCheckboxProps {
  option: IOption;
}

const VCheckbox: React.FC<VCheckboxProps> = ({ option }) => {
  return (
    <Grid
      container
      alignItems="center"
      sx={{
        mt: -1,
        mb: 1,
        "&:last-of-type": { mb: 0 },
      }}
    >
      <Checkbox sx={{ marginLeft: "-11px" }} />
      <Typography sx={{ mt: "2px" }}>{option.label}</Typography>
    </Grid>
  );
};

export default VCheckbox;
