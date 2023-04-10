import { DataStore, SortDirection } from "aws-amplify";
import { Responses } from "@/constants/enums";
import { errorResponse, successResponse } from "@/helpers/responser";
import { Media } from "@/models";
import { CreateMediaInput } from "@/models/api";
import {
  HeadCell,
  IBulkTrashVariables,
  IGetVariables,
  IOption,
  IResponse,
  IUpdateVariables,
  IListingVariables,
  ICreateVariables,
} from "@/models/app";

/**
 * fetch: List all features
 *
 * @param params :IListingVariables
 * @returns response :IResponse
 */
export async function fetch(params: IListingVariables): Promise<IResponse> {
  const { searchText, startIndex, limit, accountID } = params;

  if (startIndex === undefined)
    return errorResponse(new Error("startIndex is required"));

  try {
    const listing: Media[] = await DataStore.query(
      Media,
      (model) => {
        if (accountID) {
          return model.and((model) => [
            model.deleted.eq("0"),
            model.accountID.eq(accountID),
          ]);
        }

        if (searchText.length > 0) {
          return model.and((model) => [
            model.deleted.eq("0"),
            model.filename.contains(searchText.toLowerCase()),
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
    const single: Media | undefined = await DataStore.query(Media as any, id);

    if (!single)
      return errorResponse(new Error(`Media with id ${id} not found`));

    return successResponse(single);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function create(params: ICreateVariables): Promise<IResponse> {
  const { accountID, data } = params;

  if (!accountID) throw new Error("accountID is required");

  try {
    const createInput: CreateMediaInput = {
      accountID,
      fileUrl: data.fileUrl,
      filename: data.filename,
      filetype: data.filetype ? data.filetype : "",
      fileSize: data.fileSize ? parseInt(data.fileSize) : 0,
      fileWidth: data.fileWidth ? parseInt(data.fileWidth) : 0,
      fileHeight: data.fileHeight ? parseInt(data.fileHeight) : 0,
      alternativeText: data.alternativeText ? data.alternativeText : "",
      caption: data.caption ? data.caption : "",
      description: data.description ? data.description : "",
      attachments: data.attachments ? data.attachments : [],
      attachmentsFiles: data.attachmentsFiles ? data.attachmentsFiles : [],
      deleted: "0",
      createdAt: new Date().toLocaleString(),
      createdByID: data.userID,
      createdByName: data.userName,
    };

    const model: Media = await DataStore.save(new Media(createInput as any));

    return successResponse(model, `New Media has been created successfully`);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function update(params: IUpdateVariables): Promise<IResponse> {
  const { id, data } = params;

  try {
    const response: IResponse = await get({ id });

    if (response.type === Responses.ERROR) return response;

    const original: Media | undefined = response.data as Media;

    const model: Media = await DataStore.save(
      Media.copyOf(original!, (updated) => {
        updated.fileUrl = data.fileUrl ? data.fileUrl : updated.fileUrl;
        updated.filename = data.filename ? data.filename : updated.filename;
        updated.filetype = data.filetype ? data.filetype : updated.filetype;
        updated.fileSize = data.fileSize
          ? parseInt(data.fileSize)
          : updated.fileSize;
        updated.alternativeText = data.alternativeText
          ? data.alternativeText
          : updated.alternativeText;
        updated.caption = data.caption ? data.caption : updated.caption;
        updated.description = data.description
          ? data.description
          : updated.description;
      })
    );

    return successResponse(model, `Media has been updated successfully`);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function trash(params: IGetVariables): Promise<IResponse> {
  try {
    const response: IResponse = await get(params);

    if (response.type === Responses.ERROR) return response;

    const original: Media | undefined = response.data as Media;

    const model: Media = await DataStore.save(
      Media.copyOf(original!, (updated) => {
        updated.deleted = "1";
      })
    );

    return successResponse(model, `Media has been moved to trash successfully`);
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
    `${ids.size} Medias items has been moved to trash`
  );
}

export async function remove(params: IGetVariables) {
  try {
    const response: IResponse = await get(params);

    if (response.type === Responses.ERROR) return response;

    const original: Media | undefined = response.data as Media;

    await DataStore.delete(original!);

    return successResponse(original, `Media has been deleted successfully`);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export function options(listing: Media[]) {
  const option: IOption = { label: "None", value: "" };
  const options: IOption[] = [option];

  for (let option of listing) {
    options.push({ label: option.filename, value: option.id });
  }

  return options;
}

export const headCells: readonly HeadCell[] = [
  {
    id: "filename",
    numeric: false,
    disablePadding: false,
    label: "Filename",
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

export const dataCells: readonly string[] = ["filename"];
