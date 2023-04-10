import { ICreateVariables } from "./../models/app";
import { DataStore, SortDirection } from "aws-amplify";
import { Responses } from "@/constants/enums";
import { errorResponse, successResponse } from "@/helpers/responser";
import { Testimonial } from "@/models";
import { CreateTestimonialInput } from "@/models/api";
import {
  HeadCell,
  IBulkTrashVariables,
  IGetVariables,
  IOption,
  IResponse,
  IUpdateVariables,
  IListingVariables,
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
    const listing: Testimonial[] = await DataStore.query(
      Testimonial,
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
    const single: Testimonial | undefined = await DataStore.query(
      Testimonial as any,
      id
    );

    if (!single)
      return errorResponse(new Error(`Testimonial with id ${id} not found`));

    return successResponse(single);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function create(params: ICreateVariables): Promise<IResponse> {
  const { accountID, data } = params;

  if (!accountID) throw new Error("accountID is required");

  try {
    const createInput: CreateTestimonialInput = {
      accountID,
      title: data.title,
      slug: convertToSlug(data.slug),
      content: data.content ? data.content : "",
      statusID: data.statusID.value,
      visibilityID: data.visibilityID.value,
      // thumbnail: data.content ? data.content : "",
      deleted: "0",
      createdAt: new Date().toLocaleString(),
      createdByID: data.userID,
      createdByName: data.userName,
    };

    const model: Testimonial = await DataStore.save(
      new Testimonial(createInput as any)
    );

    return successResponse(
      model,
      `New Testimonial has been created successfully`
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

    const original: Testimonial | undefined = response.data as Testimonial;

    const model: Testimonial = await DataStore.save(
      Testimonial.copyOf(original!, (updated) => {
        updated.title = data.title ? data.title : updated.title;
        updated.slug = data.slug ? convertToSlug(data.slug) : updated.slug;
        updated.content = data.content ? data.content : updated.content;
        updated.statusID = data.statusID
          ? data.statusID.value
          : updated.statusID;
        updated.visibilityID = data.visibilityID
          ? data.visibilityID.value
          : updated.visibilityID;
      })
    );

    return successResponse(model, `Testimonial has been updated successfully`);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function trash(params: IGetVariables): Promise<IResponse> {
  try {
    const response: IResponse = await get(params);

    if (response.type === Responses.ERROR) return response;

    const original: Testimonial | undefined = response.data as Testimonial;

    const model: Testimonial = await DataStore.save(
      Testimonial.copyOf(original!, (updated) => {
        updated.deleted = "1";
      })
    );

    return successResponse(
      model,
      `Testimonial has been moved to trash successfully`
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
    `${ids.size} Testimonials items has been moved to trash`
  );
}

export async function remove(params: IGetVariables) {
  try {
    const response: IResponse = await get(params);

    if (response.type === Responses.ERROR) return response;

    const original: Testimonial | undefined = response.data as Testimonial;

    await DataStore.delete(original!);

    return successResponse(
      original,
      `Testimonial has been deleted successfully`
    );
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export function options(listing: Testimonial[]) {
  const option: IOption = { label: "None", value: "" };
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
