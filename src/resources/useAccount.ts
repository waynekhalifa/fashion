import { useDispatch } from "react-redux";
import {
  fetch,
  get,
  create,
  update,
  trash,
  bulkTrash,
  remove,
  options,
  headCells,
  dataCells,
} from "@/services/account";
import { setListing, setSelected } from "@/store/accountSlice";
import { Account } from "@/models";

export interface IAccountApi {
  accountsFetch: typeof fetch;
  accountsGet: typeof get;
  accountsCreate: typeof create;
  accountsUpdate: typeof update;
  accountsTrash: typeof trash;
  accountsBulkTrash: typeof bulkTrash;
  accountsRemove: typeof remove;
  accountsOptions: typeof options;
  accountsHeadCells: typeof headCells;
  accountsDataCells: typeof dataCells;
  accountsChangeListings: (payload: Account[]) => void;
  accountsChangeSelected: (payload: Account | null) => void;
}

const useResource = () => {
  const dispatch = useDispatch();

  const api: IAccountApi = {
    accountsFetch: fetch,
    accountsGet: get,
    accountsCreate: create,
    accountsUpdate: update,
    accountsTrash: trash,
    accountsBulkTrash: bulkTrash,
    accountsRemove: remove,
    accountsOptions: options,
    accountsHeadCells: headCells,
    accountsDataCells: dataCells,
    accountsChangeListings: (payload: Account[]) =>
      dispatch(setListing(payload)),
    accountsChangeSelected: (payload: Account | null) =>
      dispatch(setSelected(payload)),
  };

  return api;
};

export default useResource;
