import { IOptions } from "@/services/permission";
import { Grid, IconButton, InputAdornment, OutlinedInput, TextField, Typography } from "@mui/material";
import FormButton from "../UI/FormButton";
import { EditIcon } from "../UI/Icons";

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
      <OutlinedInput
        fullWidth
        size="small"
        type={"text"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              // onClick={handleClickShowPassword}
              // onMouseDown={handleMouseDownPassword}
              edge="end"
              sx={{ "&:hover": { backgroundColor: "transparent" } }}
            >
              {/* {showPassword ? <EditIcon /> : <EditIcon />} */}
              <EditIcon/>
            </IconButton>
          </InputAdornment>
        }
      />
      <Grid container justifyContent={"center"} sx={{ mt: 16 }}>
        <FormButton>حفظ</FormButton>
      </Grid>
    </>
  );
};

export default AssignCoach;
