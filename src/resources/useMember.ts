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
} from "@/services/member";

export interface IMemberApi {
  membersFetch: typeof fetch;
  membersGet: typeof get;
  membersCreate: typeof create;
  membersUpdate: typeof update;
  membersTrash: typeof trash;
  membersBulkTrash: typeof bulkTrash;
  membersRemove: typeof remove;
  membersOptions: typeof options;
  membersHeadCells: typeof headCells;
  membersDataCells: typeof dataCells;
}

const useResource = () => {
  const api: IMemberApi = {
    membersFetch: fetch,
    membersGet: get,
    membersCreate: create,
    membersUpdate: update,
    membersTrash: trash,
    membersBulkTrash: bulkTrash,
    membersRemove: remove,
    membersOptions: options,
    membersHeadCells: headCells,
    membersDataCells: dataCells,
  };

  return api;
};

export default useResource;
