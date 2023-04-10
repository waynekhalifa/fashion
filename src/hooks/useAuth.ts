import { errorResponse, successResponse } from "@/helpers/responser";
import { IResponse } from "@/models/app";
import { Auth } from "aws-amplify";

const useAuth = () => {
  /**
   * getSession: Get the current session
   *
   * @returns session
   */
  async function getSession(): Promise<IResponse> {
    try {
      const session: any = await Auth.currentSession();

      return successResponse(session.idToken.payload);
    } catch (err: Error | any) {
      return errorResponse(err);
    }
  }

  async function register(data: any) {
    try {
      // await Auth.signUp({
      //   username: `${getDomainName()}_${data.email}`,
      //   password: data.password,
      //   attributes: {
      //     name: data.name,
      //     email: `${getDomainName()}_${data.email}`,
      //   },
      // });

      console.log(data);
    } catch (err: Error | any) {
      throw err;
    }
  }

  async function login(data: any) {
    try {
      // const user = await Auth.signIn({
      //   username: `${getDomainName()}_${data.email}`,
      //   password: data.password,
      // });

      console.log(data);
    } catch (err: Error | any) {
      throw err;
    }
  }

  async function logout() {
    try {
      // await Auth.signOut();
    } catch (err: Error | any) {
      throw err;
    }
  }

  return { getSession, login, register, logout };
};

export default useAuth;
