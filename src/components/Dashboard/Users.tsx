import { Box, Grid, Typography } from "@mui/material";

import Card from "../UI/Card";
import { usersArray } from "./Dashboard";
import { createArrayFromModel } from "@/helpers/utils";

interface TableDataProps {
  label: string;
  text: string;
}

const TableData: React.FC<TableDataProps> = ({ label, text }) => {
  return (
    <>
      <Typography component="span">
        <strong>{label}:</strong>
      </Typography>
      <Typography component="span" color={"text.secondary"} sx={{ ml: 1 }}>
        {text}
      </Typography>
    </>
  );
};

interface Props {
  slug: string;
}

const Permissions: React.FC<Props> = ({ slug }) => {
  const user: any = {
    name: "علي محمد",
    jobTitle: "مدرب",
    socialNumber: "123456789",
    isSubscribed: true,
  };

  const renderTitle = (): string => {
    if (usersArray.indexOf(slug) === 0) return "المستخدمين العاديين";
    if (usersArray.indexOf(slug) === 1) return "المدربين";
    if (usersArray.indexOf(slug) === 2) return "المراجعين";
    return "";
  };

  return (
    <>
      {renderTitle().length > 0 && (
        <Typography variant="h5" fontWeight={700}>
          {renderTitle()}
        </Typography>
      )}
      <Box sx={{ mt: 4 }}>
        {createArrayFromModel(user, 1, 4).map((item: any) => (
          <Card key={item.id} sx={{ mb: 2 }}>
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <TableData label={"الاسم"} text={item.name} />
              </Grid>
              <Grid item xs={6} md={3}>
                <TableData label={"الوظيفة"} text={item.jobTitle} />
              </Grid>
              <Grid item xs={6} md={3}>
                <TableData label={"الرقم القومي"} text={item.socialNumber} />
              </Grid>
              {usersArray.indexOf(slug) === 0 && (
                <Grid item xs={6} md={3}>
                  <TableData
                    label={"الدورة التدريبية"}
                    text={item.isSubscribed ? "مشترك" : "غير مشترك"}
                  />
                </Grid>
              )}
            </Grid>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default Permissions;
