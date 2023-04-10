import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import { ExpandMoreIcon } from "../UI/Icons";

interface Props {
  id: string;
}

const SingleComment: React.FC<Props> = ({ id }) => {
  const comment: any = {
    name: "الاسم: أحمد محمد",
    email: "البريد الإلكتروني: ahmedm@g.com",
    message: "“ما هذا إنه حقاََ خبر مدهش لقد استفدت منه كثيرا”",
    createdAt: "منذ 7 دقائق",
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Typography component="span">{comment.name}</Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography component="span">{comment.email}</Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography component="span">{comment.createdAt}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography component="span">{comment.message}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>الخبر</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default SingleComment;
