import { Box, Container, Grid, List, ListItemText } from "@mui/material";
import Section from "../UI/Section";

import Title from "./Title";
import SocialLinks from "./SocialLinks";
import { Account, MenuItem, Page } from "@/models";
import { useSelector } from "react-redux";
import { selectSelected as selectAccount } from "@/store/accountSlice";
import {
  selectFooterOne,
  selectFooterThree,
  selectFooterTwo,
} from "@/store/menuSlice";
import { selectListing as selectPages } from "@/store/pageSlice";
import { IMAGES_STORAGE } from "@/constants/images";
import NextLink from "../UI/NextLink";
import { getComparator, stableSort } from "@/helpers/utils";
import { SortOrder } from "@/constants/enums";
import Link from "next/link";
import { IMediaQuery } from "@/models/app";
import useResponsive from "@/hooks/useResponsive";

interface Props {}

const accountItems = [
  { id: 2, title: "تسجيل الدخول", slug: "/auth/signin", children: [] },
  { id: 3, title: "إنشاء حساب", slug: "/auth/signup", children: [] },
];

const Widgets: React.FC<Props> = () => {
  const selectedAccount: Account | null = useSelector(selectAccount);
  const footerOne: MenuItem[] = useSelector(selectFooterOne);
  const footerTwo: MenuItem[] = useSelector(selectFooterTwo);
  const footerThree: MenuItem[] = useSelector(selectFooterThree);
  const pages: Page[] = useSelector(selectPages);
  const params: IMediaQuery = { query: "up", key: "md" };
  const mdUp = useResponsive(params);

  if (!selectedAccount || footerOne.length === 0 || pages.length === 0)
    return null;

  const footerOneItems: Page[] = [];
  const footerTwoItems: Page[] = [];
  const footerThreeItems: Page[] = [];

  for (let item of stableSort(
    footerOne,
    getComparator(SortOrder.ASC, "precedence")
  )) {
    const page: Page | undefined = pages.find(
      (page: Page) => page.id === item.pageID
    );

    if (page) footerOneItems.push(page);
  }

  for (let item of stableSort(
    footerTwo,
    getComparator(SortOrder.ASC, "precedence")
  )) {
    const page: Page | undefined = pages.find(
      (page: Page) => page.id === item.pageID
    );

    if (page) footerTwoItems.push(page);
  }

  for (let item of stableSort(
    footerThree,
    getComparator(SortOrder.ASC, "precedence")
  )) {
    const page: Page | undefined = pages.find(
      (page: Page) => page.id === item.pageID
    );

    if (page) footerThreeItems.push(page);
  }

  return (
    <Section>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} lg={3}>
            <Box
              component="span"
              sx={{
                display: "flex",
                alignItems: "center",
                a: {
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                },
              }}
            >
              <Link href={"/"}>
                <Box
                  component="img"
                  src={`${IMAGES_STORAGE}${selectedAccount.footerLogoURL!}?tx=c_fill,g_auto,f_auto`}
                  alt={selectedAccount.siteTitle}
                  sx={{
                    display: "block",
                    maxHeight: { xs: 56, md: 72 },
                    width: "auto",
                  }}
                />
              </Link>
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" }, mt: { md: 2 } }}>
              <SocialLinks />
            </Box>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <Grid container spacing={4}>
              <Grid item xs={6} sm={6} md={3}>
                <Title>تنقل</Title>
                <List disablePadding sx={{ color: "grey.300" }}>
                  {footerOneItems.map((item) => (
                    <Box
                      component="li"
                      key={item.id}
                      sx={{
                        mb: 1,
                        "&:last-of-type": {
                          mb: 0,
                        },
                      }}
                    >
                      <ListItemText>
                        <NextLink
                          link={item.slug ? item.slug : "/"}
                          text={item.title}
                          showIcon={mdUp}
                        />
                      </ListItemText>
                    </Box>
                  ))}
                </List>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <Title>الشركة</Title>
                <List disablePadding sx={{ color: "grey.300" }}>
                  {footerTwoItems.map((item) => (
                    <Box
                      component="li"
                      key={item.id}
                      sx={{
                        mb: 1,
                        "&:last-of-type": {
                          mb: 0,
                        },
                      }}
                    >
                      <ListItemText>
                        <NextLink
                          link={item.slug ? item.slug : "/"}
                          text={item.title}
                          showIcon={mdUp}
                        />
                      </ListItemText>
                    </Box>
                  ))}
                </List>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <Title>الدعم</Title>
                <List disablePadding sx={{ color: "grey.300" }}>
                  {footerThreeItems.map((item) => (
                    <Box
                      component="li"
                      key={item.id}
                      sx={{
                        mb: 1,
                        "&:last-of-type": {
                          mb: 0,
                        },
                      }}
                    >
                      <ListItemText>
                        <NextLink
                          link={item.slug ? item.slug : "/"}
                          text={item.title}
                          showIcon={mdUp}
                        />
                      </ListItemText>
                    </Box>
                  ))}
                </List>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <Title>الحساب</Title>
                <List disablePadding sx={{ color: "grey.300" }}>
                  {accountItems.map((item) => (
                    <Box
                      component="li"
                      key={item.id}
                      sx={{
                        mb: 1,
                        "&:last-of-type": {
                          mb: 0,
                        },
                      }}
                    >
                      <ListItemText>
                        <NextLink
                          link={item.slug ? item.slug : "/"}
                          text={item.title}
                          showIcon={mdUp}
                        />
                      </ListItemText>
                    </Box>
                  ))}
                </List>
              </Grid>
              <Grid item xs={12} sm={6} md={3} sx={{ display: { md: "none" } }}>
                <SocialLinks />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default Widgets;
