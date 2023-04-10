import type { NextPage } from "next";

import Auth from "@/components/Auth/Auth";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import {
  IAccountListingVariables,
  IListingVariables,
  IResponse,
} from "@/models/app";
import { getDomainName } from "@/helpers/utils";
import { Responses } from "@/constants/enums";
import useLoading from "@/hooks/useLoading";
import useAccount from "@/resources/useAccount";
import MainLoader from "@/components/UI/MainLoader";

export interface PostPageQuery extends ParsedUrlQuery {
  page?: string;
  sort_by?: string;
  sort_order?: string;
  slug?: string;
}

const Accounts: NextPage = () => {
  const router = useRouter();
  const query = router.query as PostPageQuery;
  const { loading, setLoading } = useLoading();
  const { accountsFetch, accountsChangeSelected } = useAccount();

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
    ]);

    const [accounts] = response;

    if (accounts.type === Responses.ERROR || accounts.data.length === 0) {
      setLoading(false);
      return;
    }

    accountsChangeSelected(accounts.data[0]);

    setLoading(false);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetch();

    // eslint-disable-next-line
  }, []);

  if (loading) return <MainLoader />;

  return <Auth slug={query.slug!} />;
};

export default Accounts;
