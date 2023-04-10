import { useDispatch } from "react-redux";
import { IOptions, fetch } from "@/services/permission";
import { setPermissions } from "@/store/featureSlice";

export interface IPermissionApi {
  permissionsFetch: typeof fetch;
  permissionsChangeListings: (payload: IOptions) => void;
}

const useResource = () => {
  const dispatch = useDispatch();

  const api: IPermissionApi = {
    permissionsFetch: fetch,
    permissionsChangeListings: (payload: IOptions) =>
      dispatch(setPermissions(payload)),
  };

  return api;
};

export default useResource;
