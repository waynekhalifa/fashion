import { Post } from "@/models";
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
} from "@/services/post";
import { setListing } from "@/store/postSlice";
import { useDispatch } from "react-redux";

export interface IPostApi {
  postsFetch: typeof fetch;
  postsGet: typeof get;
  postsCreate: typeof create;
  postsUpdate: typeof update;
  postsTrash: typeof trash;
  postsBulkTrash: typeof bulkTrash;
  postsRemove: typeof remove;
  postsOptions: typeof options;
  postsHeadCells: typeof headCells;
  postsDataCells: typeof dataCells;
  postsChangeListings: (payload: Post[]) => void;
}

const useResource = () => {
  const dispatch = useDispatch();

  const api: IPostApi = {
    postsFetch: fetch,
    postsGet: get,
    postsCreate: create,
    postsUpdate: update,
    postsTrash: trash,
    postsBulkTrash: bulkTrash,
    postsRemove: remove,
    postsOptions: options,
    postsHeadCells: headCells,
    postsDataCells: dataCells,
    postsChangeListings: (payload: Post[]) => dispatch(setListing(payload)),
  };

  return api;
};

export default useResource;
