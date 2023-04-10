import { Box, Button, Container, Typography } from "@mui/material";
import Discount from "./Discount";

interface Props {}

const Featured: React.FC<Props> = () => {
  return (
    <Box>
      <Container>
        <Typography variant="h2" fontWeight={500}>
          WHOLESALE BIG
          <br />
          DISCOUNT
        </Typography>
        <Button size="large">LET’S GO SHOPPING</Button>
        <Typography>
          Changing styles becomes more extraordinary for men and women,
          especially among teenagers who like to be stylish. Hundreds or even
          thousands of stocks we provide for all of you.
        </Typography>
        <Box>
          <Discount />
        </Box>
      </Container>
    </Box>
  );
};

export default Featured;
