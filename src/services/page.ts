import { DataStore, SortDirection } from "aws-amplify";
import { Responses } from "@/constants/enums";
import { errorResponse, successResponse } from "@/helpers/responser";
import { Page } from "@/models";
import { CreatePageInput } from "@/models/api";
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
import { convertToSlug } from "@/helpers/utils";

/**
 * fetch: List all features
 *
 * @param params :IListingVariables
 * @returns response :IResponse
 */
export async function fetch(params: IListingVariables): Promise<IResponse> {
  const { searchText, startIndex, limit, slug, accountID } = params;

  if (startIndex === undefined)
    return errorResponse(new Error("startIndex is required"));

  try {
    const listing: Page[] = await DataStore.query(
      Page,
      (model) => {
        if (slug) {
          return model.and((model) => [
            model.deleted.eq("0"),
            model.slug.eq(slug),
          ]);
        }

        if (accountID) {
          return model.and((model) => [
            model.deleted.eq("0"),
            model.accountID.eq(accountID),
          ]);
        }

        if (searchText.length > 0) {
          return model.and((model) => [
            model.deleted.eq("0"),
            model.title.contains(searchText.toLowerCase()),
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
    const single: Page | undefined = await DataStore.query(Page as any, id);

    if (!single)
      return errorResponse(new Error(`Page with id ${id} not found`));

    return successResponse(single);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function create(params: ICreateVariables): Promise<IResponse> {
  const { accountID, data } = params;

  if (!accountID) throw new Error("accountID is required");

  try {
    const createInput: CreatePageInput = {
      accountID,
      pageID: data.pageID ? data.pageID.value : "",
      title: data.title,
      slug: convertToSlug(data.slug),
      content: data.content ? data.content : "",
      excerpt: data.excerpt ? data.excerpt : "",
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

    const model: Page = await DataStore.save(new Page(createInput as any));

    return successResponse(model, `New Page has been created successfully`);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function update(params: IUpdateVariables): Promise<IResponse> {
  const { id, data } = params;

  try {
    const response: IResponse = await get({ id });

    if (response.type === Responses.ERROR) return response;

    const original: Page | undefined = response.data as Page;

    let thumbnail: string | null | undefined = original!.thumbnail;
    let thumbnailURL: string | null | undefined = original!.thumbnailURL;
    let thumbnailHeight: number | null | undefined = original!.thumbnailHeight;
    let thumbnailWidth: number | null | undefined = original!.thumbnailWidth;

    if (data.thumbnail !== undefined) {
      if (typeof data.thumbnail === "string") thumbnail = data.thumbnail;
      else if (data.headerLogo === null) {
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

    const model: Page = await DataStore.save(
      Page.copyOf(original!, (updated) => {
        updated.pageID = data.pageID ? data.pageID.value : updated.pageID;
        updated.title = data.title ? data.title : updated.title;
        updated.slug = data.slug ? convertToSlug(data.slug) : updated.slug;
        updated.content = data.content ? data.content : updated.content;
        updated.excerpt = data.excerpt ? data.excerpt : updated.excerpt;
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

    return successResponse(model, `Page has been updated successfully`);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function trash(params: IGetVariables): Promise<IResponse> {
  try {
    const response: IResponse = await get(params);

    if (response.type === Responses.ERROR) return response;

    const original: Page | undefined = response.data as Page;

    const model: Page = await DataStore.save(
      Page.copyOf(original!, (updated) => {
        updated.deleted = "1";
      })
    );

    return successResponse(model, `Page has been moved to trash successfully`);
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
    `${ids.size} Pages items has been moved to trash`
  );
}

export async function remove(params: IGetVariables) {
  try {
    const response: IResponse = await get(params);

    if (response.type === Responses.ERROR) return response;

    const original: Page | undefined = response.data as Page;

    await DataStore.delete(original!);

    return successResponse(original, `Page has been deleted successfully`);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export function options(listing: Page[]) {
  const option: IOption = { label: "None", value: "-1" };
  const options: IOption[] = [option];

  for (let option of listing) {
    options.push({ label: option.title, value: option.id });
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
