import { Page } from "@/models";
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
} from "@/services/page";
import { setListing } from "@/store/pageSlice";

export interface IPageApi {
  pagesFetch: typeof fetch;
  pagesGet: typeof get;
  pagesCreate: typeof create;
  pagesUpdate: typeof update;
  pagesTrash: typeof trash;
  pagesBulkTrash: typeof bulkTrash;
  pagesRemove: typeof remove;
  pagesOptions: typeof options;
  pagesHeadCells: typeof headCells;
  pagesDataCells: typeof dataCells;
  pagesChangeListings: (payload: Page[]) => void;
}

const useResource = (): IPageApi => {
  const dispatch = useDispatch();

  const api: IPageApi = {
    pagesFetch: fetch,
    pagesGet: get,
    pagesCreate: create,
    pagesUpdate: update,
    pagesTrash: trash,
    pagesBulkTrash: bulkTrash,
    pagesRemove: remove,
    pagesOptions: options,
    pagesHeadCells: headCells,
    pagesDataCells: dataCells,
    pagesChangeListings: (payload: Page[]) => dispatch(setListing(payload)),
  };

  return api;
};

export default useResource;
