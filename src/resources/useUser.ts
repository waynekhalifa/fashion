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
} from "@/services/user";

export interface IUserApi {
  usersFetch: typeof fetch;
  usersGet: typeof get;
  usersCreate: typeof create;
  usersUpdate: typeof update;
  usersTrash: typeof trash;
  usersBulkTrash: typeof bulkTrash;
  usersRemove: typeof remove;
  usersOptions: typeof options;
  usersHeadCells: typeof headCells;
  usersDataCells: typeof dataCells;
}

const useResource = () => {
  const api: IUserApi = {
    usersFetch: fetch,
    usersGet: get,
    usersCreate: create,
    usersUpdate: update,
    usersTrash: trash,
    usersBulkTrash: bulkTrash,
    usersRemove: remove,
    usersOptions: options,
    usersHeadCells: headCells,
    usersDataCells: dataCells,
  };

  return api;
};

export default useResource;
