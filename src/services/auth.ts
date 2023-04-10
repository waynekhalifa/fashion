import { Auth } from "aws-amplify";

import { fetch as usersFetch, create as usersCreate } from "@/services/user";
import { errorResponse, successResponse } from "@/helpers/responser";
import { IResponse, IUserListingVariables } from "@/models/app";
import { getDomainName } from "@/helpers/utils";
import { AuthMessages, Responses } from "@/constants/enums";

/**
 * getSession: Get the current session
 *
 * @returns response
 */
export async function getSession(): Promise<IResponse> {
  try {
    const session: any = await Auth.currentSession();

    const params: IUserListingVariables = {
      searchText: "",
      limit: 1000,
      startIndex: 0,
      email: `${getDomainName()}_${session.idToken.payload.email}`,
    };

    const usersResponse: IResponse = await usersFetch(params);

    if (usersResponse.type === Responses.ERROR) {
      return errorResponse(new Error(usersResponse.message));
    }

    return successResponse(usersResponse.data[0]);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

/**
 * register: Register a new user
 *
 * @param data
 * @returns response
 */
export async function register(data: any): Promise<IResponse> {
  try {
    const createInput: any = {
      ...data,
      email: `${getDomainName()}_${data.email}`,
    };
    await Promise.all([
      Auth.signUp({
        username: `${getDomainName()}_${data.email}`,
        password: data.password,
        attributes: {
          email: `${getDomainName()}_${data.email}`,
        },
      }),
      usersCreate(createInput),
    ]);

    return successResponse(null, AuthMessages.REGISTER_SUCCESS);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

/**
 * login: Login a user
 *
 * @param data
 * @returns response
 */
export async function login(data: any): Promise<IResponse> {
  const params: IUserListingVariables = {
    searchText: "",
    limit: 1000,
    startIndex: 0,
    email: `${getDomainName()}_${data.email}`,
  };

  try {
    const results: any[] = await Promise.all([
      Auth.signIn({
        username: `${getDomainName()}_${data.email}`,
        password: data.password,
      }),
      usersFetch(params),
    ]);

    const usersResponse: IResponse = results[1];

    if (usersResponse.type === Responses.ERROR) {
      return errorResponse(new Error(usersResponse.message));
    }

    return successResponse(usersResponse.data, AuthMessages.LOGIN_SUCCESS);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

/**
 * logout: Logout a user
 *
 * @returns response
 */
export async function logout(): Promise<IResponse> {
  try {
    localStorage.clear();

    await Auth.signOut();

    return successResponse(null, AuthMessages.LOGOUT_SUCCESS);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

/**
 * forgetPassword: Forget password
 *
 * @param data
 * @returns response
 */
export async function forgetPassword(data: any): Promise<IResponse> {
  try {
    await Auth.forgotPassword(`${getDomainName()}_${data.email}`);

    return successResponse(null, AuthMessages.FORGET_PASSWORD_SUCCESS);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}

/**
 * resetPassword: Reset password
 *
 * @param data
 * @returns response
 */
export async function resetPassword(data: any): Promise<IResponse> {
  try {
    await Auth.forgotPasswordSubmit(
      `${getDomainName()}_${data.email}`,
      data.code,
      data.newPassword
    );

    return successResponse(null, AuthMessages.RESET_PASSWORD_SUCCESS);
  } catch (err: Error | any) {
    return errorResponse(err);
  }
}
