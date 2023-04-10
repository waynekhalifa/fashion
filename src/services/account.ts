import { DataStore, SortDirection } from "aws-amplify";
import { Responses } from "@/constants/enums";
import { errorResponse, successResponse } from "@/helpers/responser";
import { Account } from "@/models";
import { CreateAccountInput } from "@/models/api";
import {
  HeadCell,
  IAccountListingVariables,
  IBulkTrashVariables,
  ICreateVariables,
  IGetVariables,
  IOption,
  IResponse,
  IUpdateVariables,
} from "@/models/app";

export async function fetch(
  params: IAccountListingVariables
): Promise<IResponse> {
  const { searchText, startIndex, limit, domain } = params;

  if (startIndex === undefined)
    return errorResponse(new Error("startIndex is required"));

  try {
    const listing: Account[] = await DataStore.query(
      Account,
      (model) => {
        if (domain) {
          return model.and((model) => [
            model.deleted.eq("0"),
            model.domain.eq(domain),
          ]);
        }

        if (searchText.length > 0) {
          return model.and((model) => [
            model.deleted.eq("0"),
            model.or((model) => [
              model.domain.contains(searchText.toLowerCase()),
              model.siteTitle.contains(searchText.toLowerCase()),
              model.siteAddress.contains(searchText.toLowerCase()),
            ]),
          ]);
        }

        return model.deleted.eq("0");
      },
      {
        page: startIndex / limit,
        limit: limit,
        sort: (s) => s.createdAt(SortDirection.DESCENDING),
      }
    );

    return successResponse(listing);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function get(params: IGetVariables): Promise<IResponse> {
  const { id } = params;

  try {
    const single: Account | undefined = await DataStore.query(
      Account as any,
      id
    );

    if (!single)
      return errorResponse(new Error(`Account with id ${id} not found`));

    return successResponse(single);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function create(params: ICreateVariables): Promise<IResponse> {
  const { accountID, data } = params;

  if (!accountID) throw new Error("accountID is required");

  const features: string[] = [];

  for (let feature of data.features) {
    features.push(feature.value);
  }

  try {
    const createInput: CreateAccountInput = {
      domain: data.domain,
      headerLogo: data.headerLogo ? data.headerLogo.id : "",
      headerLogoURL: data.headerLogo ? data.headerLogo.fileUrl : "",
      headerLogoHeight: data.headerLogo ? data.headerLogo.fileHeight : "",
      headerLogoWidth: data.headerLogo ? data.headerLogo.fileWidth : "",
      footerLogo: data.footerLogo ? data.footerLogo.id : "",
      footerLogoURL: data.footerLogo ? data.footerLogo.fileUrl : "",
      footerLogoHeight: data.footerLogo ? data.footerLogo.fileHeight : "",
      footerLogoWidth: data.footerLogo ? data.footerLogo.fileWidth : "",
      siteTitle: data.siteTitle,
      tagline: data.tagline,
      description: data.description,
      address: data.address,
      workingHours: data.workingHours ? data.workingHours : "",
      email: data.email ? data.email : "",
      phone_number: data.phone_number ? data.phone_number : "",
      siteAddress: data.siteAddress,
      features,
      statusID: data.statusID.value,
      visibilityID: data.visibilityID.value,
      deleted: "0",
      createdAt: new Date().toLocaleString(),
      createdByID: data.userID,
      createdByName: data.userName,
    };

    const model: Account = await DataStore.save(
      new Account(createInput as any)
    );

    return successResponse(model, `New Account has been created successfully`);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function update(params: IUpdateVariables): Promise<IResponse> {
  const { id, data } = params;

  try {
    const response: IResponse = await get({ id });

    if (response.type === Responses.ERROR) return response;

    const original: Account | undefined = response.data as Account;

    const features: string[] = [];

    for (let feature of data.features) {
      features.push(feature.value);
    }

    let headerLogo: string | null | undefined = original!.headerLogo;
    let footerLogo: string | null | undefined = original!.footerLogo;
    let headerLogoURL: string | null | undefined = original!.headerLogoURL;
    let headerLogoHeight: number | null | undefined =
      original!.headerLogoHeight;
    let headerLogoWidth: number | null | undefined = original!.headerLogoWidth;
    let footerLogoURL: string | null | undefined = original!.footerLogoURL;
    let footerLogoHeight: number | null | undefined =
      original!.footerLogoHeight;
    let footerLogoWidth: number | null | undefined = original!.footerLogoWidth;

    if (data.headerLogo !== undefined) {
      if (typeof data.headerLogo === "string") headerLogo = data.headerLogo;
      else if (data.headerLogo === null) {
        headerLogo = null;
        headerLogoURL = null;
        headerLogoHeight = null;
        headerLogoWidth = null;
      } else {
        headerLogo = data.headerLogo.id;
        headerLogoURL = data.headerLogo.fileUrl;
        headerLogoHeight = data.headerLogo.fileHeight;
        headerLogoWidth = data.headerLogo.fileWidth;
      }
    }

    if (data.footerLogo !== undefined) {
      if (typeof data.footerLogo === "string") footerLogo = data.footerLogo;
      else if (data.footerLogo === null) {
        footerLogo = null;
        footerLogoURL = null;
        footerLogoHeight = null;
        footerLogoWidth = null;
      } else {
        footerLogo = data.footerLogo.id;
        footerLogoURL = data.footerLogo.fileUrl;
        footerLogoHeight = data.footerLogo.fileHeight;
        footerLogoWidth = data.footerLogo.fileWidth;
      }
    }

    const model: Account = await DataStore.save(
      Account.copyOf(original!, (updated) => {
        updated.domain = data.domain
          ? data.domain.toLowerCase()
          : updated.domain;
        updated.siteTitle = data.siteTitle
          ? data.siteTitle.toLowerCase()
          : updated.siteTitle;
        updated.tagline = data.tagline
          ? data.tagline.toLowerCase()
          : updated.tagline;
        updated.description = data.description
          ? data.description.toLowerCase()
          : updated.description;
        updated.siteAddress = data.siteAddress
          ? data.siteAddress
          : updated.siteAddress;
        updated.address = data.address ? data.address : updated.address;
        updated.workingHours = data.workingHours
          ? data.workingHours
          : updated.workingHours;
        updated.email = data.email ? data.email : updated.email;
        updated.phone_number = data.phone_number
          ? data.phone_number
          : updated.phone_number;
        updated.headerLogo = headerLogo;
        updated.headerLogoURL = headerLogoURL;
        updated.headerLogoHeight = headerLogoHeight;
        updated.headerLogoWidth = headerLogoWidth;
        updated.footerLogo = footerLogo;
        updated.footerLogoURL = footerLogoURL;
        updated.footerLogoHeight = footerLogoHeight;
        updated.footerLogoWidth = footerLogoWidth;
        updated.features = features;
        updated.statusID = data.statusID
          ? data.statusID.value
          : updated.statusID;
        updated.visibilityID = data.visibilityID
          ? data.visibilityID.value
          : updated.visibilityID;
      })
    );

    return successResponse(model, `Account has been updated successfully`);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function trash(params: IGetVariables): Promise<IResponse> {
  try {
    const response: IResponse = await get(params);

    if (response.type === Responses.ERROR) return response;

    const original: Account | undefined = response.data as Account;

    const model: Account = await DataStore.save(
      Account.copyOf(original!, (updated) => {
        updated.deleted = "1";
      })
    );

    return successResponse(
      model,
      `Account has been moved to trash successfully`
    );
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function bulkTrash(params: IBulkTrashVariables) {
  const { ids } = params;

  ids.forEach(async (id: string) => {
    try {
      await trash({ id });
    } catch (err: Error | any) {
      return errorResponse(err);
    }
  });

  return successResponse(
    undefined,
    `${ids.size} Accounts items has been moved to trash`
  );
}

export async function remove(params: IGetVariables) {
  try {
    const response: IResponse = await get(params);

    if (response.type === Responses.ERROR) return response;

    const original: Account | undefined = response.data as Account;

    await DataStore.delete(original!);

    return successResponse(original, `Account has been deleted successfully`);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export function options(listing: Account[]) {
  const option: IOption = { label: "None", value: "" };
  const options: IOption[] = [option];

  for (let option of listing) {
    options.push({ label: option.siteTitle, value: option.id });
  }

  return options;
}

export const headCells: readonly HeadCell[] = [
  {
    id: "siteTitle",
    numeric: false,
    disablePadding: false,
    label: "Site Title",
  },
  {
    id: "createdBy",
    numeric: false,
    disablePadding: false,
    label: "Created By",
  },
  {
    id: "createdAt",
    numeric: false,
    disablePadding: false,
    label: "Date",
  },
  {
    id: "actions",
    numeric: true,
    disablePadding: false,
    label: "",
  },
];

export const dataCells: readonly string[] = ["siteTitle"];
