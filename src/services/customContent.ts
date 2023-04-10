import { DataStore, SortDirection } from "aws-amplify";
import { Responses } from "@/constants/enums";
import { errorResponse, successResponse } from "@/helpers/responser";
import { CustomContent } from "@/models";
import { CreateCustomContentInput } from "@/models/api";
import {
  HeadCell,
  IBulkTrashVariables,
  IGetVariables,
  IOption,
  IResponse,
  IUpdateVariables,
  ICustomContentListingVariables,
  ICreateVariables,
} from "@/models/app";

/**
 * fetch: List all custom contents
 *
 * @param params :ICustomContentListingVariables
 * @returns response :IResponse
 */
export async function fetch(
  params: ICustomContentListingVariables
): Promise<IResponse> {
  const { searchText, startIndex, limit, accountID, modelID } = params;

  if (startIndex === undefined)
    return errorResponse(new Error("startIndex is required"));

  try {
    const listing: CustomContent[] = await DataStore.query(
      CustomContent,
      (model) => {
        if (accountID) {
          return model.and((model) => [
            model.deleted.eq("0"),
            model.accountID.eq(accountID),
          ]);
        }

        if (modelID) {
          return model.and((model) => [
            model.deleted.eq("0"),
            model.modelID.eq(modelID),
          ]);
        }

        if (searchText.length > 0) {
          return model.and((model) => [
            model.deleted.eq("0"),
            model.content.contains(searchText.toLowerCase()),
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
    const single: CustomContent | undefined = await DataStore.query(
      CustomContent,
      id
    );

    if (!single)
      return errorResponse(new Error(`CustomContent with id ${id} not found`));

    return successResponse(single);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function create(params: ICreateVariables): Promise<IResponse> {
  const { accountID, data } = params;

  if (!accountID) throw new Error("accountID is required");

  try {
    const createInput: CreateCustomContentInput = {
      accountID,
      model: data.model,
      modelID: data.modelID.value,
      title: data.title,
      content: data.content,
      statusID: data.statusID.value,
      visibilityID: data.visibilityID.value,
      thumbnail: data.thumbnail ? data.thumbnail.id : "",
      thumbnailURL: data.thumbnail ? data.thumbnail.fileUrl : "",
      thumbnailHeight: data.thumbnail ? data.thumbnail.fileHeight : 0,
      thumbnailWidth: data.thumbnail ? data.thumbnail.fileWidth : 0,
      deleted: "0",
      createdAt: new Date().toLocaleString(),
      createdByID: data.userID,
      createdByName: data.userName,
    };

    const model: CustomContent = await DataStore.save(
      new CustomContent(createInput as any)
    );

    return successResponse(
      model,
      `New CustomContent has been created successfully`
    );
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function update(params: IUpdateVariables): Promise<IResponse> {
  const { id, data } = params;

  try {
    const response: IResponse = await get({ id });

    if (response.type === Responses.ERROR) return response;

    const original: CustomContent | undefined = response.data as CustomContent;

    let thumbnail: string | null | undefined = original!.thumbnail;
    let thumbnailURL: string | null | undefined = original!.thumbnailURL;
    let thumbnailHeight: number | null | undefined = original!.thumbnailHeight;
    let thumbnailWidth: number | null | undefined = original!.thumbnailWidth;

    if (data.thumbnail !== undefined) {
      if (typeof data.thumbnail === "string") thumbnail = data.thumbnail;
      else if (data.thumbnail === null) {
        thumbnail = null;
        thumbnailURL = null;
        thumbnailHeight = null;
        thumbnailWidth = null;
      } else {
        thumbnail = data.thumbnail.id;
        thumbnailURL = data.thumbnail.fileUrl;
        thumbnailHeight = data.thumbnail.fileHeight;
        thumbnailWidth = data.thumbnail.fileWidth;
      }
    }

    const model: CustomContent = await DataStore.save(
      CustomContent.copyOf(original!, (updated) => {
        updated.model = data.model ? data.model : updated.model;
        updated.modelID = data.modelID ? data.modelID.value : updated.modelID;
        updated.title = data.title ? data.title : updated.title;
        updated.content = data.content ? data.content : updated.content;
        updated.thumbnail = thumbnail;
        updated.thumbnailURL = thumbnailURL;
        updated.thumbnailHeight = thumbnailHeight;
        updated.thumbnailWidth = thumbnailWidth;
        updated.statusID = data.statusID
          ? data.statusID.value
          : updated.statusID;
        updated.visibilityID = data.visibilityID
          ? data.visibilityID.value
          : updated.visibilityID;
      })
    );

    return successResponse(
      model,
      `CustomContent has been updated successfully`
    );
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function trash(params: IGetVariables): Promise<IResponse> {
  try {
    const response: IResponse = await get(params);

    if (response.type === Responses.ERROR) return response;

    const original: CustomContent | undefined = response.data as CustomContent;

    const model: CustomContent = await DataStore.save(
      CustomContent.copyOf(original!, (updated) => {
        updated.deleted = "1";
      })
    );

    return successResponse(
      model,
      `CustomContent has been moved to trash successfully`
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
    `${ids.size} CustomContents items has been moved to trash`
  );
}

export async function remove(params: IGetVariables) {
  try {
    const response: IResponse = await get(params);

    if (response.type === Responses.ERROR) return response;

    const original: CustomContent | undefined = response.data as CustomContent;

    await DataStore.delete(original!);

    return successResponse(
      original,
      `CustomContent has been deleted successfully`
    );
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export function options(listing: CustomContent[]) {
  const option: IOption = { label: "None", value: "" };
  const options: IOption[] = [option];

  for (let option of listing) {
    options.push({ label: option.content, value: option.id });
  }

  return options;
}

export const headCells: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name",
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

export const dataCells: readonly string[] = ["name"];
