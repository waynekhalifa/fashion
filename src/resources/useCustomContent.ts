import { CustomContent, Member } from "@/models";
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
} from "@/services/customContent";
import { setAboutContent, setMembers } from "@/store/pageSlice";
import { useDispatch } from "react-redux";

export interface ICustomContentApi {
  customContentsFetch: typeof fetch;
  customContentsGet: typeof get;
  customContentsCreate: typeof create;
  customContentsUpdate: typeof update;
  customContentsTrash: typeof trash;
  customContentsBulkTrash: typeof bulkTrash;
  customContentsRemove: typeof remove;
  customContentsOptions: typeof options;
  customContentsHeadCells: typeof headCells;
  customContentsDataCells: typeof dataCells;
  setAboutContent: (payload: CustomContent[]) => void;
  setMembers: (payload: Member[]) => void;
}

const useResource = (): ICustomContentApi => {
  const dispatch = useDispatch();

  const api: ICustomContentApi = {
    customContentsFetch: fetch,
    customContentsGet: get,
    customContentsCreate: create,
    customContentsUpdate: update,
    customContentsTrash: trash,
    customContentsBulkTrash: bulkTrash,
    customContentsRemove: remove,
    customContentsOptions: options,
    customContentsHeadCells: headCells,
    customContentsDataCells: dataCells,
    setAboutContent: (payload: CustomContent[]) =>
      dispatch(setAboutContent(payload)),
    setMembers: (payload: Member[]) => dispatch(setMembers(payload)),
  };

  return api;
};

export default useResource;
