import { motion } from "framer-motion";

import { selectPrimaryMenu } from "@/store/menuSlice";
import { selectListing as selectPages } from "@/store/pageSlice";
import MenuItemComponent from "./MenuItem";
import { useSelector } from "react-redux";
import { MenuItem, Page } from "@/models";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = () => {
  const primaryMenu: MenuItem[] = useSelector(selectPrimaryMenu);
  const pages: Page[] = useSelector(selectPages);
  if (primaryMenu.length === 0 || pages.length === 0) return null;

  const Items: Page[] = [];

  for (let i = 0; i < primaryMenu.length; i++) {
    const page: Page | undefined = pages.find(
      (page: Page) => page.id === primaryMenu[i].pageID
    );

    if (page) Items.push(page);
  }

  return (
    <motion.ul variants={variants}>
      {Items.reverse().map((model: Page) => (
        <MenuItemComponent page={model} key={model.id} />
      ))}
    </motion.ul>
  );
};

export default Navigation;
