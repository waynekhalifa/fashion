import { DataStore, SortDirection } from "aws-amplify";
import { Responses } from "@/constants/enums";
import { errorResponse, successResponse } from "@/helpers/responser";
import { MenuItem } from "@/models";
import { CreateMenuItemInput } from "@/models/api";
import {
  HeadCell,
  IBulkTrashVariables,
  IGetVariables,
  IOption,
  IResponse,
  IUpdateVariables,
  ICreateVariables,
  IMenuItemListingVariables,
} from "@/models/app";

/**
 * fetch: List all menu items
 *
 * @param params :IMenuItemListingVariables
 * @returns response :IResponse
 */
export async function fetch(
  params: IMenuItemListingVariables
): Promise<IResponse> {
  const { searchText, startIndex, limit, menuID } = params;

  if (startIndex === undefined)
    return errorResponse(new Error("startIndex is required"));

  try {
    const listing: MenuItem[] = await DataStore.query(
      MenuItem,
      (model) => {
        if (menuID) {
          return model.and((model) => [
            model.deleted.eq("0"),
            model.menuID.eq(menuID),
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
    const single: MenuItem | undefined = await DataStore.query(
      MenuItem as any,
      id
    );

    if (!single)
      return errorResponse(new Error(`MenuItem with id ${id} not found`));

    return successResponse(single);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function create(params: ICreateVariables): Promise<IResponse> {
  const { accountID, data } = params;

  if (!accountID) throw new Error("accountID is required");

  try {
    const createInput: CreateMenuItemInput = {
      menuID: data.menuID.value,
      type: data.type,
      pageID: data.pageID ? data.pageID.value : "",
      categoryID: data.categoryID ? data.categoryID.value : "",
      precedence: data.precedence ? data.precedence : "",
      deleted: "0",
      createdAt: new Date().toLocaleString(),
      createdByID: data.userID,
      createdByName: data.userName,
    };

    const model: MenuItem = await DataStore.save(
      new MenuItem(createInput as any)
    );

    return successResponse(model, `New MenuItem has been created successfully`);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function update(params: IUpdateVariables): Promise<IResponse> {
  const { id, data } = params;

  try {
    const response: IResponse = await get({ id });

    if (response.type === Responses.ERROR) return response;

    const original: MenuItem | undefined = response.data as MenuItem;

    const model: MenuItem = await DataStore.save(
      MenuItem.copyOf(original!, (updated) => {
        updated.menuID = data.menuID ? data.menuID : updated.menuID;
        updated.type = data.type ? data.type : updated.type;
        updated.pageID = data.pageID ? data.pageID.value : updated.pageID;
        updated.categoryID = data.categoryID
          ? data.categoryID.value
          : updated.categoryID;
        updated.precedence = data.precedence
          ? data.precedence
          : updated.precedence;
      })
    );

    return successResponse(model, `MenuItem has been updated successfully`);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function trash(params: IGetVariables): Promise<IResponse> {
  try {
    const response: IResponse = await get(params);

    if (response.type === Responses.ERROR) return response;

    const original: MenuItem | undefined = response.data as MenuItem;

    const model: MenuItem = await DataStore.save(
      MenuItem.copyOf(original!, (updated) => {
        updated.deleted = "1";
      })
    );

    return successResponse(
      model,
      `MenuItem has been moved to trash successfully`
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
    `${ids.size} MenuItems items has been moved to trash`
  );
}

export async function remove(params: IGetVariables) {
  try {
    const response: IResponse = await get(params);

    if (response.type === Responses.ERROR) return response;

    const original: MenuItem | undefined = response.data as MenuItem;

    await DataStore.delete(original!);

    return successResponse(original, `MenuItem has been deleted successfully`);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export function options(listing: MenuItem[]) {
  const option: IOption = { label: "None", value: "" };
  const options: IOption[] = [option];

  for (let option of listing) {
    options.push({ label: option.menuID, value: option.id });
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
