import { Responses } from "@/constants/enums";
import { AlertColor } from "@mui/material";

export type Order = "asc" | "desc";

export type Token = string | null | undefined;

export interface IOption {
  label: string;
  value: string;
}
export interface IMediaQuery {
  query: "up" | "down" | "between" | "only";
  key: "xs" | "sm" | "md" | "lg" | "xl";
  start?: "xs" | "sm" | "md" | "lg" | "xl";
  end?: "xs" | "sm" | "md" | "lg" | "xl";
}

export interface IFormFieldsVariables {
  slug: string;
  model?: any;
}

export interface IFormField {
  name: string;
  label: string;
  type:
    | "text"
    | "email"
    | "password"
    | "number"
    | "date"
    | "time"
    | "datetime-local"
    | "checkbox"
    | "radio"
    | "select"
    | "hidden"
    | "multi select"
    | "image"
    | "textarea";
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  options?: IOption;
  listing?: Readonly<Record<string, any>>[];
  modelKey?: string;
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof any;
  label: string | undefined;
  numeric: boolean;
}

export interface IResponse {
  type:
    | Responses.SUCCESS
    | Responses.ERROR
    | Responses.WARNING
    | Responses.INFO;
  message?: string;
  data?: any;
}

export interface IListingVariables {
  limit: number;
  searchText: string;
  startIndex?: number;
  slug?: string;
  token?: Token;
  isAuthenticated?: boolean;
  accountID?: string;
}

export interface IByAccountListingVariables extends IListingVariables {
  accountID: string;
}

export interface IGetVariables {
  id: string;
}

export interface ICreateVariables {
  accountID?: string;
  data: any;
}

export interface IUpdateVariables extends IGetVariables {
  data: any;
}

export interface IBulkTrashVariables {
  ids: Set<string>;
}

export interface IAccountListingVariables extends IListingVariables {
  domain?: string;
}

export interface IUserListingVariables extends IListingVariables {
  email?: string;
}

export interface IMenuListingVariables extends IListingVariables {
  name?: string;
}

export interface IMenuItemListingVariables extends IListingVariables {
  menuID?: string;
}

export interface IFeatureListingVariables extends IListingVariables {
  slug?: string;
}

export interface ICustomContentListingVariables extends IListingVariables {
  modelID?: string;
}

export type DefaultFeature = {
  name: string;
  icon: string;
  slug: string;
  singleName: string;
  precedence: string;
};

export interface IModal {
  id: string;
  open: boolean;
  content: React.ReactNode;
}

export interface ISnackBar {
  open: boolean;
  severity: AlertColor | undefined;
  content: React.ReactNode;
  persist: boolean;
}

export interface IMultiSelect {
  name: string;
  modelKey: string;
  listing: Readonly<Record<string, any>>[];
}

export interface IApiVariables {
  slug: string;
  singleName: string;
  multiSelects?: IMultiSelect[];
}

export interface IContactItem {
  id: string;
  src: string;
  width: number;
  height: number;
  title: string;
  description: string;
}
