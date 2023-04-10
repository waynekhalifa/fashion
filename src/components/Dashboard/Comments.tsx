import { createArrayFromModel } from "@/helpers/utils";
import Card from "../UI/Card";
import { Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Routes } from "@/constants/enums";

interface Props {
  slug: string;
}

const Comments: React.FC<Props> = ({ slug }) => {
  const { push } = useRouter();
  const user: any = {
    message: "“ما هذا إنه حقاََ خبر مدهش لقد استفدت منه كثيرا”",
    createdAt: "منذ 7 دقائق",
  };

  const handleClick = (id: string) =>
    push(`/${Routes.DASHBOARD}/${slug}/${id}`);

  return (
    <>
      {createArrayFromModel(user, 1, 4).map((item: any) => (
        <Card key={item.id} sx={{ mb: 2, cursor: "pointer" }}>
          <Grid
            container
            justifyContent={"space-between"}
            onClick={() => handleClick(item.id)}
          >
            <Typography component="span">{user.message}</Typography>
            <Typography
              component="span"
              color={"text.secondary"}
              sx={{ ml: 1 }}
            >
              {user.createdAt}
            </Typography>
          </Grid>
        </Card>
      ))}
    </>
  );
};

export default Comments;
