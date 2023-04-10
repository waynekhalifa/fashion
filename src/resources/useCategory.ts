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
} from "@/services/category";

export interface ICategoryApi {
  categoriesFetch: typeof fetch;
  categoriesGet: typeof get;
  categoriesCreate: typeof create;
  categoriesUpdate: typeof update;
  categoriesTrash: typeof trash;
  categoriesBulkTrash: typeof bulkTrash;
  categoriesRemove: typeof remove;
  categoriesOptions: typeof options;
  categoriesHeadCells: typeof headCells;
  categoriesDataCells: typeof dataCells;
}

const useResource = () => {
  const api: ICategoryApi = {
    categoriesFetch: fetch,
    categoriesGet: get,
    categoriesCreate: create,
    categoriesUpdate: update,
    categoriesTrash: trash,
    categoriesBulkTrash: bulkTrash,
    categoriesRemove: remove,
    categoriesOptions: options,
    categoriesHeadCells: headCells,
    categoriesDataCells: dataCells,
  };

  return api;
};

export default useResource;
