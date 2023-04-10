import { IOption } from "@/models/app";
import { Box, MenuItem, Select, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  control: any;
  options: IOption[];
}

const RHTextField: React.FC<Props> = ({ label, name, control, options }) => {
  return (
    <>
      <Typography paragraph component="label" htmlFor={`${name}`}>
        {label}
      </Typography>
      <Box sx={{ position: "relative", minHeight: 64 }}>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <Select fullWidth size="small" {...field} type="select">
              {options.map((option: IOption) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </Box>
    </>
  );
};

export default RHTextField;
