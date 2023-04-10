import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  control: any;
  watch: any;
  listing?: Readonly<Record<string, any>>[];
  modelKey?: string;
}

const RHAutoComplete: React.FC<Props> = ({
  label,
  name,
  control,
  watch,
  listing,
  modelKey,
}) => {
  const value = watch(name);

  return (
    <>
      <Typography paragraph component="label" htmlFor={`${name}`}>
        {label}
      </Typography>
      <Box
        sx={{
          position: "relative",
          minHeight: 64,
          ".MuiChip-root": { height: 22 },
          ".MuiButtonBase-root": { my: 0, ml: 0 },
        }}
      >
        <Controller
          control={control}
          name={name}
          render={({ field: { ref, onChange, ...field } }) => (
            <Autocomplete
              multiple
              limitTags={3}
              options={listing!}
              value={value!}
              filterOptions={(options, state) => {
                if (state.inputValue === "") return options;

                return options.filter(
                  (model: Readonly<Record<string, any>>) =>
                    model[modelKey!] === state.inputValue
                );
              }}
              onChange={(_, data) => onChange(data)}
              getOptionLabel={(option: any) => option[modelKey!]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  {...field}
                  inputRef={ref}
                  fullWidth
                  size="small"
                />
              )}
            />
          )}
        />
      </Box>
    </>
  );
};

export default RHAutoComplete;
