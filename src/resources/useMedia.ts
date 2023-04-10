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
} from "@/services/media";
import { setListing, setSelected } from "@/store/mediaSlice";
import { useDispatch } from "react-redux";
import { Media } from "@/models";

export interface IMediaApi {
  mediaLibraryFetch: typeof fetch;
  mediaLibraryGet: typeof get;
  mediaLibraryCreate: typeof create;
  mediaLibraryUpdate: typeof update;
  mediaLibraryTrash: typeof trash;
  mediaLibraryBulkTrash: typeof bulkTrash;
  mediaLibraryRemove: typeof remove;
  mediaLibraryOptions: typeof options;
  mediaLibraryHeadCells: typeof headCells;
  mediaLibraryDataCells: typeof dataCells;
  mediaLibraryChangeListings: (payload: Media[]) => void;
  mediaLibraryChangeSelected: (payload: Set<string>) => void;
}

const useResource = (): IMediaApi => {
  const dispatch = useDispatch();

  const api: IMediaApi = {
    mediaLibraryFetch: fetch,
    mediaLibraryGet: get,
    mediaLibraryCreate: create,
    mediaLibraryUpdate: update,
    mediaLibraryTrash: trash,
    mediaLibraryBulkTrash: bulkTrash,
    mediaLibraryRemove: remove,
    mediaLibraryOptions: options,
    mediaLibraryHeadCells: headCells,
    mediaLibraryDataCells: dataCells,
    mediaLibraryChangeListings: (payload: Media[]) =>
      dispatch(setListing(payload)),
    mediaLibraryChangeSelected: (payload: Set<string>) =>
      dispatch(setSelected(payload)),
  };

  return api;
};

export default useResource;
