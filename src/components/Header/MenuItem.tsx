import { Page } from "@/models";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

interface Props {
  page: Page;
}

const MenuItem: React.FC<Props> = ({ page }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Box
        component="span"
        sx={{
          a: { textDecoration: "none", color: "inherit", fontWeight: 700 },
        }}
      >
        <Link href={`/${page.slug}`}>{page.title}</Link>
      </Box>
    </motion.li>
  );
};

export default MenuItem;
