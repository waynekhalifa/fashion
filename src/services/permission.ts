import { errorResponse, successResponse } from "@/helpers/responser";
import { IOption, IResponse } from "@/models/app";
import axios from "axios";

export type IOptions = ReadonlyArray<IOption>;

export async function fetch(): Promise<IResponse> {
  let url: string = window.location.protocol + "//";
  url += window.location.host;
  url += "/api/permissions.json";

  try {
    const response = await axios.get<IOptions>(url);

    return successResponse(response.data);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}
