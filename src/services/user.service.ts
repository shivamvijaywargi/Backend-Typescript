import ApiError from "../helper/ApiError";
import UserModel, { IUser } from "../model/user.model";
import httpStatus from "../util/httpStatus";

const createUser = async (userBody: IUser) => {
  if (await UserModel.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.badRequest, "User is already exist");
  }
  return UserModel.create(userBody);
};

const getUserByEmail = async (email: string) => {
  return UserModel.findOne({ email });
};

export default {
  createUser,
  getUserByEmail,
};
