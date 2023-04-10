import Header from "@/components/Header";
import MainLoader from "@/components/UI/MainLoader";
import { Pages, Responses } from "@/constants/enums";
import useLoading from "@/hooks/useLoading";
import { Menu, Page } from "@/models";
import {
  IAccountListingVariables,
  ICustomContentListingVariables,
  IListingVariables,
  IMenuItemListingVariables,
  IResponse,
} from "@/models/app";
import useAccount from "@/resources/useAccount";
import useMenu from "@/resources/useMenu";
import usePage from "@/resources/usePage";
import useMenuItem from "@/resources/useMenuItem";
import type { NextPage } from "next";

import { useCallback, useEffect } from "react";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import PageComponent from "@/components/Page";
import { getDomainName } from "@/helpers/utils";
import useCustomContent from "@/resources/useCustomContent";
import useMember from "@/resources/useMember";
import Footer from "@/components/Footer";

export interface PostPageQuery extends ParsedUrlQuery {
  page?: string;
  sort_by?: string;
  sort_order?: string;
  slug?: string;
}

const PageTemplate: NextPage = () => {
  const router = useRouter();
  const query = router.query as PostPageQuery;
  const { loading, setLoading } = useLoading();
  const { accountsFetch, accountsChangeSelected } = useAccount();
  const { menusFetch, menusSetListing, setPrimaryMenu } = useMenu();
  const { pagesFetch, pagesChangeListings } = usePage();
  const { menuItemsFetch } = useMenuItem();
  const { customContentsFetch, setAboutContent, setMembers } =
    useCustomContent();
  const { membersFetch } = useMember();

  const fetch = useCallback(async () => {
    const listingParams: IListingVariables = {
      searchText: "",
      limit: 1000,
      startIndex: 0,
    };

    const accountParams: IAccountListingVariables = {
      ...listingParams,
      domain: getDomainName(),
    };

    const response: IResponse[] = await Promise.all([
      accountsFetch(accountParams),
      menusFetch(listingParams),
      pagesFetch(listingParams),
    ]);

    const [accounts, menus, pages] = response;

    if (
      accounts.type === Responses.ERROR ||
      accounts.data.length === 0 ||
      menus.type === Responses.ERROR ||
      menus.data.length === 0 ||
      pages.type === Responses.ERROR ||
      pages.data.length === 0
    ) {
      setLoading(false);
      return;
    }

    accountsChangeSelected(accounts.data[0]);
    menusSetListing(menus.data);
    pagesChangeListings(pages.data);

    const primaryMenu: Menu | undefined = menus.data.find(
      (model: Menu) => model.name === "Primary Menu"
    );

    if (!primaryMenu) {
      setLoading(false);
      return;
    }

    const menuItemsParams: IMenuItemListingVariables = {
      ...listingParams,
      menuID: primaryMenu.id,
    };

    const menuItemsResponse: IResponse = await menuItemsFetch(menuItemsParams);
    setPrimaryMenu(menuItemsResponse.data);

    if (query.slug === Pages.ABOUT_US) {
      const page: Page | undefined = pages.data.find(
        (model: Page) => model.slug === Pages.ABOUT_US
      );

      if (!page) {
        setLoading(false);
        return;
      }

      const customContentParams: ICustomContentListingVariables = {
        ...listingParams,
        modelID: page.id,
      };

      const responses: IResponse[] = await Promise.all([
        customContentsFetch(customContentParams),
        membersFetch(listingParams),
      ]);

      const [customContents, members] = responses;

      if (
        customContents.type === Responses.ERROR ||
        customContents.data.length === 0 ||
        members.type === Responses.ERROR ||
        members.data.length === 0
      ) {
        setLoading(false);
        return;
      }

      setAboutContent(customContents.data);
      setMembers(members.data);
    }

    setLoading(false);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetch();

    // eslint-disable-next-line
  }, []);

  if (loading) return <MainLoader />;

  return (
    <>
      <Header activePage={Pages.BLOG} />
      <PageComponent slug={Pages.BLOG} />
      <Footer />
    </>
  );
};

export default PageTemplate;
