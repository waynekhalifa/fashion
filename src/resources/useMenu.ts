import {
  setFooterFour,
  setFooterOne,
  setFooterThree,
  setFooterTwo,
  setListing,
  setPrimaryMenu,
} from "@/store/menuSlice";
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
} from "@/services/menu";
import { Menu, MenuItem } from "@/models";
import { useDispatch } from "react-redux";

export interface IMenuApi {
  menusFetch: typeof fetch;
  menusGet: typeof get;
  menusCreate: typeof create;
  menusUpdate: typeof update;
  menusTrash: typeof trash;
  menusBulkTrash: typeof bulkTrash;
  menusRemove: typeof remove;
  menusOptions: typeof options;
  menusHeadCells: typeof headCells;
  menusDataCells: typeof dataCells;
  menusSetListing: (payload: Menu[]) => void;
  setPrimaryMenu: (payload: MenuItem[]) => void;
  setFooterOne: (payload: MenuItem[]) => void;
  setFooterTwo: (payload: MenuItem[]) => void;
  setFooterThree: (payload: MenuItem[]) => void;
  setFooterFour: (payload: MenuItem[]) => void;
}

const useResource = (): IMenuApi => {
  const dispatch = useDispatch();

  const api: IMenuApi = {
    menusFetch: fetch,
    menusGet: get,
    menusCreate: create,
    menusUpdate: update,
    menusTrash: trash,
    menusBulkTrash: bulkTrash,
    menusRemove: remove,
    menusOptions: options,
    menusHeadCells: headCells,
    menusDataCells: dataCells,
    menusSetListing: (payload: Menu[]) => dispatch(setListing(payload)),
    setPrimaryMenu: (payload: MenuItem[]) => dispatch(setPrimaryMenu(payload)),
    setFooterOne: (payload: MenuItem[]) => dispatch(setFooterOne(payload)),
    setFooterTwo: (payload: MenuItem[]) => dispatch(setFooterTwo(payload)),
    setFooterThree: (payload: MenuItem[]) => dispatch(setFooterThree(payload)),
    setFooterFour: (payload: MenuItem[]) => dispatch(setFooterFour(payload)),
  };

  return api;
};

export default useResource;
