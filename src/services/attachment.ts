import { DataStore, SortDirection } from "aws-amplify";
import { Responses } from "@/constants/enums";
import { errorResponse, successResponse } from "@/helpers/responser";
import { Attachment } from "@/models";
import { CreateAttachmentInput } from "@/models/api";
import {
  HeadCell,
  IGetVariables,
  IOption,
  IResponse,
  IUpdateVariables,
  IListingVariables,
} from "@/models/app";

/**
 * fetch: List all features
 *
 * @param params :IListingVariables
 * @returns response :IResponse
 */
export async function fetch(params: IListingVariables): Promise<IResponse> {
  const { startIndex, limit } = params;

  if (startIndex === undefined)
    return errorResponse(new Error("startIndex is required"));

  try {
    const listing: Attachment[] = await DataStore.query(
      Attachment,
      (model) => {
        return model;
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
    const single: Attachment | undefined = await DataStore.query(
      Attachment as any,
      id
    );

    if (!single)
      return errorResponse(new Error(`Attachment with id ${id} not found`));

    return successResponse(single);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function create(data: any): Promise<IResponse> {
  try {
    const createInput: CreateAttachmentInput = {
      mediaID: data.mediaID,
      fileUrl: data.fileUrl,
      filename: data.filename,
      filetype: data.filetype ? data.filetype : "",
      fileSize: data.fileSize ? data.fileSize : 0,
      fileWidth: data.fileWidth ? data.fileWidth : 0,
      fileHeight: data.fileHeight ? data.fileHeight : 0,
      alternativeText: data.alternativeText ? data.alternativeText : "",
      description: data.description ? data.description : "",
      caption: data.caption ? data.caption : "",
      createdAt: new Date().toLocaleString(),
      createdByID: data.userID,
      createdByName: data.userName,
    };

    // TODO: Add Attachment social media links

    const model: Attachment = await DataStore.save(
      new Attachment(createInput as any)
    );

    return successResponse(
      model,
      `New Attachment has been created successfully`
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

    const original: Attachment | undefined = response.data as Attachment;

    const model: Attachment = await DataStore.save(
      Attachment.copyOf(original!, (updated) => {
        updated.mediaID = data.mediaID ? data.mediaID : updated.mediaID;
        updated.fileUrl = data.fileUrl ? data.fileUrl : updated.fileUrl;
        updated.alternativeText = data.alternativeText
          ? data.alternativeText
          : updated.alternativeText;
      })
    );

    return successResponse(model, `Attachment has been updated successfully`);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function remove(params: IGetVariables) {
  try {
    const response: IResponse = await get(params);

    if (response.type === Responses.ERROR) return response;

    const original: Attachment | undefined = response.data as Attachment;

    await DataStore.delete(original!);

    return successResponse(
      original,
      `Attachment has been deleted successfully`
    );
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export function options(listing: Attachment[]) {
  const option: IOption = { label: "None", value: "" };
  const options: IOption[] = [option];

  for (let option of listing) {
    options.push({ label: option.fileUrl, value: option.id });
  }

  return options;
}

export const headCells: readonly HeadCell[] = [
  {
    id: "title",
    numeric: false,
    disablePadding: false,
    label: "Title",
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

export const dataCells: readonly string[] = ["title"];
