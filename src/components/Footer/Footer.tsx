import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { Suspense, useCallback, useEffect } from "react";
import { Box } from "@mui/material";

import ActionLoader from "../UI/ActionLoader/ActionLoader";
import useLoading from "@/hooks/useLoading";
import useMenu from "@/resources/useMenu";
import useMenuItem from "@/resources/useMenuItem";
import { selectListing as selectMenus } from "@/store/menuSlice";
import { Menu } from "@/models";
import {
  IListingVariables,
  IMenuItemListingVariables,
  IResponse,
} from "@/models/app";

const Widgets = dynamic(() => import("./Widgets"), { suspense: true });
const CopyRight = dynamic(() => import("./CopyRight"), { suspense: true });

const Footer: React.FC = () => {
  const menus: Menu[] = useSelector(selectMenus);
  const { loading, setLoading } = useLoading();
  const { setFooterOne, setFooterTwo, setFooterThree, setFooterFour } =
    useMenu();
  const { menuItemsFetch } = useMenuItem();

  const fetch = useCallback(async () => {
    const listingParams: IListingVariables = {
      searchText: "",
      limit: 1000,
      startIndex: 0,
    };

    const footerOne: Menu | undefined = menus.find(
      (model: Menu) => model.name === "Footer One"
    );
    const footerTwo: Menu | undefined = menus.find(
      (model: Menu) => model.name === "Footer Two"
    );
    const footerThree: Menu | undefined = menus.find(
      (model: Menu) => model.name === "Footer Three"
    );
    const footerFour: Menu | undefined = menus.find(
      (model: Menu) => model.name === "Footer Four"
    );

    if (!footerOne || !footerTwo || !footerThree || !footerFour) {
      setLoading(false);
      return;
    }

    const footerOneItems: IMenuItemListingVariables = {
      ...listingParams,
      menuID: footerOne.id,
    };
    const footerTwoItems: IMenuItemListingVariables = {
      ...listingParams,
      menuID: footerTwo.id,
    };
    const footerThreeItems: IMenuItemListingVariables = {
      ...listingParams,
      menuID: footerThree.id,
    };
    const footerFourItems: IMenuItemListingVariables = {
      ...listingParams,
      menuID: footerFour.id,
    };

    const itemsResponse: IResponse[] = await Promise.all([
      menuItemsFetch(footerOneItems),
      menuItemsFetch(footerTwoItems),
      menuItemsFetch(footerThreeItems),
      menuItemsFetch(footerFourItems),
    ]);

    const [
      footerOneItemsResponse,
      footerTwoItemsResponse,
      footerThreeItemsResponse,
      footerFourItemsResponse,
    ] = itemsResponse;

    setFooterOne(footerOneItemsResponse.data);
    setFooterTwo(footerTwoItemsResponse.data);
    setFooterThree(footerThreeItemsResponse.data);
    setFooterFour(footerFourItemsResponse.data);

    setLoading(false);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetch();
    // eslint-disable-next-line
  }, []);

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "secondary.main",
        color: "common.white",
        // minHeight: 420,
        position: "relative",
      }}
    >
      {loading && <ActionLoader position="absolute" />}
      <Suspense fallback={<ActionLoader position="absolute" />}>
        <Widgets />
        <CopyRight />
      </Suspense>
    </Box>
  );
};

export default Footer;
