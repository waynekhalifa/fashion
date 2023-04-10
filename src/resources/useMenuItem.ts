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
} from "@/services/menuItem";

export interface IMenuItemApi {
  menuItemsFetch: typeof fetch;
  menuItemsGet: typeof get;
  menuItemsCreate: typeof create;
  menuItemsUpdate: typeof update;
  menuItemsTrash: typeof trash;
  menuItemsBulkTrash: typeof bulkTrash;
  menuItemsRemove: typeof remove;
  menuItemsOptions: typeof options;
  menuItemsHeadCells: typeof headCells;
  menuItemsDataCells: typeof dataCells;
}

const useResource = (): IMenuItemApi => {
  const api: IMenuItemApi = {
    menuItemsFetch: fetch,
    menuItemsGet: get,
    menuItemsCreate: create,
    menuItemsUpdate: update,
    menuItemsTrash: trash,
    menuItemsBulkTrash: bulkTrash,
    menuItemsRemove: remove,
    menuItemsOptions: options,
    menuItemsHeadCells: headCells,
    menuItemsDataCells: dataCells,
  };

  return api;
};

export default useResource;
