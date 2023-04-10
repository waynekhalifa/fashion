import { IconKey } from "@/components/UI/Icons";
import { errorResponse, successResponse } from "@/helpers/responser";
import { IResponse } from "@/models/app";
import axios from "axios";

export type Features = ReadonlyArray<Feature>;

export type Feature = {
  id: number;
  title: string;
  link: string;
  icon?: IconKey;
  children: Features;
};

export async function fetch(): Promise<IResponse> {
  let url: string = window.location.protocol + "//";
  url += window.location.host;
  url += "/api/admin-features.json";

  try {
    const response = await axios.get<Features>(url);

    return successResponse(response.data);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}
