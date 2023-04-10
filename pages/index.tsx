import Featured from "@/components/Featured";
import Header from "@/components/Header";
import MainLoader from "@/components/UI/MainLoader";
import { Responses } from "@/constants/enums";
import useLoading from "@/hooks/useLoading";
import { Menu } from "@/models";
import {
  IAccountListingVariables,
  IListingVariables,
  IMenuItemListingVariables,
  IResponse,
} from "@/models/app";
import useAccount from "@/resources/useAccount";
import useMenu from "@/resources/useMenu";
import usePage from "@/resources/usePage";
import useMenuItem from "@/resources/useMenuItem";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

import { useCallback, useEffect } from "react";
import { getDomainName } from "@/helpers/utils";
import Footer from "@/components/Footer";

const HomeSections = dynamic(() => import("@/components/HomeSections"));

const Home: NextPage = () => {
  const { loading, setLoading } = useLoading();
  const { accountsFetch, accountsChangeSelected } = useAccount();
  const { menusFetch, menusSetListing, setPrimaryMenu } = useMenu();
  const { pagesFetch, pagesChangeListings } = usePage();
  const { menuItemsFetch } = useMenuItem();

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
      <Header activePage={""} />
      <Featured />
      <HomeSections />
      <Footer />
    </>
  );
};

export default Home;
