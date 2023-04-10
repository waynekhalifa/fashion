import { Checkbox, Grid, Typography } from "@mui/material";

import { IOption } from "@/models/app";

interface Props {
  name: string;
  options: IOption[];
  register: any;
  defaultValue: any;
}

const Checkboxes: React.FC<Props> = ({
  name,
  options,
  register,
  defaultValue,
}) => {
  if (options.length === 0 || !options) return null;

  return (
    <>
      {options.map((option: any) => (
        <Grid
          key={option.value}
          container
          alignItems="center"
          sx={{
            mt: -1,
            mb: 1,
            "&:last-of-type": { mb: 0 },
          }}
        >
          <Checkbox
            sx={{ marginLeft: "-11px" }}
            defaultChecked={defaultValue.has(option.value)}
            {...register(`${name}_${option.value}`)}
          />
          <Typography sx={{ mt: "2px" }}>{option.label}</Typography>
        </Grid>
      ))}
    </>
  );
};

export default Checkboxes;
