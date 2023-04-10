import { useSelector } from "react-redux";
import { Box, List } from "@mui/material";

import { MenuItem, Page } from "@/models";
import { selectPrimaryMenu } from "@/store/menuSlice";
import { selectListing as selectPages } from "@/store/pageSlice";
import { getComparator, stableSort } from "@/helpers/utils";
import { SortOrder } from "@/constants/enums";
import NextLink from "../UI/NextLink";

interface Props {
  activePage: string;
}

const NavMenu: React.FC<Props> = ({ activePage }) => {
  const primaryMenu: MenuItem[] = useSelector(selectPrimaryMenu);
  const pages: Page[] = useSelector(selectPages);

  if (primaryMenu.length === 0 || pages.length === 0) return null;

  const Items: Page[] = [];

  for (let item of stableSort(
    primaryMenu,
    getComparator(SortOrder.ASC, "precedence")
  )) {
    const page: Page | undefined = pages.find(
      (page: Page) => page.id === item.pageID
    );

    if (page) Items.push(page);
  }

  const isActive = (slug: string): boolean => slug === activePage;

  return (
    <List
      disablePadding
      sx={{ display: "flex", alignItems: "center", height: 72 }}
    >
      {Items.map((model: Page) => (
        <Box
          key={model.id}
          component="li"
          sx={{
            position: "relative",
            ml: 4,
            "&::after": {
              content: '""',
              width: 32,
              height: 2,
              backgroundColor: isActive(model.slug ? model.slug : "")
                ? "primary.main"
                : "transparent",
              position: "absolute",
              bottom: "-4px",
              left: "50%",
              transform: "translateX(-50%)",
            },
          }}
        >
          <NextLink
            link={!model.slug ? "/" : model.slug}
            text={model.title}
            fontWeight={500}
          />
        </Box>
      ))}
    </List>
  );
};

export default NavMenu;
