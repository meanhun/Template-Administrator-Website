import { Path } from "./Path";
import { POST_JSON } from "./Fetch";

export const Api = {
  _login: Path.API + "Users/login",
  // _logout: Path.API+'users/logout'
};

export const LoginApi = async (data, handleData) =>
  await POST_JSON(Api._login, data, (res) => {
    handleData(res);
  });
