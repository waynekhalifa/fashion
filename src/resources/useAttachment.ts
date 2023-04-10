import {
  fetch,
  get,
  create,
  update,
  remove,
  options,
  headCells,
  dataCells,
} from "@/services/attachment";

export interface IAttachmentApi {
  attachmentsFetch: typeof fetch;
  attachmentsGet: typeof get;
  attachmentsCreate: typeof create;
  attachmentsUpdate: typeof update;
  attachmentsRemove: typeof remove;
  attachmentsOptions: typeof options;
  attachmentsHeadCells: typeof headCells;
  attachmentsDataCells: typeof dataCells;
}

const useResource = () => {
  const api: IAttachmentApi = {
    attachmentsFetch: fetch,
    attachmentsGet: get,
    attachmentsCreate: create,
    attachmentsUpdate: update,
    attachmentsRemove: remove,
    attachmentsOptions: options,
    attachmentsHeadCells: headCells,
    attachmentsDataCells: dataCells,
  };

  return api;
};

export default useResource;
