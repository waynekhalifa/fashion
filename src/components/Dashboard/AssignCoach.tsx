import { IOption } from "@/models/app";
import { IOptions } from "@/services/permission";
import { Autocomplete, Grid, TextField, Typography } from "@mui/material";
import FormButton from "../UI/FormButton";

const options: IOptions = [
  { label: "مراجع", value: "مراجع" },
  { label: "مدرب", value: "مدرب" },
];

interface Props {}

const AssignCoach: React.FC<Props> = ({}) => {
  return (
    <>
      <Typography component="label">رقم البطاقة</Typography>
      <TextField fullWidth size="small" type={"text"} sx={{ mb: 4 }} />
      <Typography component="label">نوع المستخدم</Typography>
      <Autocomplete
        options={options}
        filterOptions={(options, state) => {
          if (state.inputValue === "") return options;

          return options.filter(
            (model: IOption) => model.label === state.inputValue
          );
        }}
        getOptionLabel={(option: any) => option.label}
        renderInput={(params) => (
          <TextField {...params} fullWidth size="small" />
        )}
      />
      <Grid container justifyContent={"center"} sx={{ mt: 16 }}>
        <FormButton>حفظ</FormButton>
      </Grid>
    </>
  );
};

export default AssignCoach;
