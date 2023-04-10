import { DataStore, SortDirection } from "aws-amplify";
import { Responses } from "@/constants/enums";
import { errorResponse, successResponse } from "@/helpers/responser";
import { User } from "@/models";
import { CreateUserInput } from "@/models/api";
import {
  HeadCell,
  IBulkTrashVariables,
  IGetVariables,
  IOption,
  IResponse,
  IUpdateVariables,
  IUserListingVariables,
} from "@/models/app";
import { randomStr } from "@/helpers/utils";

/**
 * fetch: List all users
 *
 * @param params :IUserListingVariables
 * @returns response :IResponse
 */
export async function fetch(params: IUserListingVariables): Promise<IResponse> {
  const { searchText, startIndex, limit, email, accountID } = params;

  if (startIndex === undefined)
    return errorResponse(new Error("startIndex is required"));

  try {
    const listing: User[] = await DataStore.query(
      User,
      (model) => {
        if (email) {
          return model.and((model) => [
            model.deleted.eq("0"),
            model.email.eq(email),
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
            model.or((model) => [
              model.given_name.contains(searchText.toLowerCase()),
              model.family_name.contains(searchText.toLowerCase()),
              model.email.contains(searchText.toLowerCase()),
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
    const single: User | undefined = await DataStore.query(User as any, id);

    if (!single)
      return errorResponse(new Error(`User with id ${id} not found`));

    return successResponse(single);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function create(data: any): Promise<IResponse> {
  try {
    const createInput: CreateUserInput = {
      username: data.email,
      preferred_username: "email",
      email: data.email,
      email_verified: false,
      phone_number: data.phone_number ? data.phone_number : "",
      phone_number_verified: true,
      name: data.name ? data.name : "",
      nickname: data.nickname ? data.nickname : "",
      given_name: data.given_name ? data.given_name : "",
      middle_name: data.middle_name ? data.middle_name : "",
      family_name: data.family_name ? data.family_name : "",
      address: data.address ? data.address : "",
      birthDate: data.birthDate ? data.birthDate : "",
      gender: data.gender ? data.gender : "",
      locale: data.locale ? data.locale : "",
      picture: data.picture ? data.picture : "",
      website: data.website ? data.website : "",
      zoneInfo: data.zoneInfo ? data.zoneInfo : "",
      verification_code: randomStr(24),
      group: data.group ? data.group : "",
      deleted: "0",
      createdAt: new Date().toLocaleString(),
      createdByID: "Cognito",
      createdByName: "Cognito",
    };

    const model: User = await DataStore.save(new User(createInput as any));

    return successResponse(model, `New User has been created successfully`);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function update(params: IUpdateVariables): Promise<IResponse> {
  const { id, data } = params;

  try {
    const response: IResponse = await get({ id });

    if (response.type === Responses.ERROR) return response;

    const original: User | undefined = response.data as User;

    const model: User = await DataStore.save(
      User.copyOf(original!, (updated) => {
        updated.email = data.email ? data.email : updated.email;
      })
    );

    return successResponse(model, `User has been updated successfully`);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export async function trash(params: IGetVariables): Promise<IResponse> {
  try {
    const response: IResponse = await get(params);

    if (response.type === Responses.ERROR) return response;

    const original: User | undefined = response.data as User;

    const model: User = await DataStore.save(
      User.copyOf(original!, (updated) => {
        updated.deleted = "1";
      })
    );

    return successResponse(model, `User has been moved to trash successfully`);
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
    `${ids.size} Users items has been moved to trash`
  );
}

export async function remove(params: IGetVariables) {
  try {
    const response: IResponse = await get(params);

    if (response.type === Responses.ERROR) return response;

    const original: User | undefined = response.data as User;

    await DataStore.delete(original!);

    return successResponse(original, `User has been deleted successfully`);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

export function options(listing: User[]) {
  const option: IOption = { label: "None", value: "" };
  const options: IOption[] = [option];

  for (let option of listing) {
    options.push({
      label: `${option.given_name} ${option.family_name}`,
      value: option.id,
    });
  }

  return options;
}

export const headCells: readonly HeadCell[] = [];
export const dataCells: readonly string[] = [];
