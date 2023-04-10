import { useDispatch } from "react-redux";
import { fetch } from "@/services/feature";
import { setListing } from "@/store/featureSlice";
import { Feature } from "@/models";

export interface IFeatureApi {
  featuresFetch: typeof fetch;

  featuresChangeListings: (payload: Feature[]) => void;
}

const useResource = () => {
  const dispatch = useDispatch();

  const api: IFeatureApi = {
    featuresFetch: fetch,
    featuresChangeListings: (payload: Feature[]) =>
      dispatch(setListing(payload)),
  };

  return api;
};

export default useResource;
