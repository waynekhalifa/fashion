import { IconButton, Typography } from "@mui/material";

interface Props {}

const Category: React.FC<Props> = ({}) => {
  return (
    <>
      <Typography variant="h3">
        CHOOSE YOUR
        <br />
        FASHION CATEGORY
      </Typography>
      <Typography>
        Tempor justo odio nam ut et. Vel interdum mi consequat mi interdum
        iaculis adipiscing. Purus est sed lectus consequat phasellus at
        sollicitudin consectetur lorem. Rhoncus sed pellentesque nunc.
      </Typography>
      <Typography>Various choices of clothing for men</Typography>
      <Typography>
        {"MEN’S"}
        <br />
        FASHION
      </Typography>
      <IconButton>
        <Typography>VISIT SHOP</Typography>
      </IconButton>
      <>image placeholder</>
      <>image placeholder</>
      <Typography>Various choices of clothing for men</Typography>
      <Typography>
        {"WOMAN’S"}
        <br />
        FASHION
      </Typography>
    </>
  );
};

export default Category;
