import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Suspense, useCallback, useEffect } from "react";
import { ParsedUrlQuery } from "querystring";

import ActionLoader from "@/components/UI/ActionLoader";
import MainLoader from "@/components/UI/MainLoader";
import useLoading from "@/hooks/useLoading";
import useFeature from "@/resources/useFeature";
import { Responses } from "@/constants/enums";
import {
  IAccountListingVariables,
  IListingVariables,
  IResponse,
} from "@/models/app";
import { getDomainName } from "@/helpers/utils";
import useAccount from "@/resources/useAccount";

const Dashboard = dynamic(() => import("@/components/Dashboard"), {
  suspense: true,
});

export interface PostPageQuery extends ParsedUrlQuery {
  page?: string;
  sort_by?: string;
  sort_order?: string;
  slug?: string;
}

const DashboardPage: NextPage = () => {
  const router = useRouter();
  const query = router.query as PostPageQuery;
  const { loading, setLoading } = useLoading();
  const { accountsFetch, accountsChangeSelected } = useAccount();
  const { featuresFetch, featuresChangeListings } = useFeature();

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
      featuresFetch(),
    ]);

    const [accounts, features] = response;

    if (
      accounts.type === Responses.ERROR ||
      accounts.data.length === 0 ||
      features.type === Responses.ERROR
    ) {
      setLoading(false);
      return;
    }

    accountsChangeSelected(accounts.data[0]);
    featuresChangeListings(features.data);

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
      <Suspense fallback={<ActionLoader position="fixed" />}>
        <Dashboard slug={query.slug!} />
      </Suspense>
    </>
  );
};

export default DashboardPage;
