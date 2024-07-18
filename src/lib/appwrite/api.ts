import { INewUser } from "@/types";
import { ID } from "appwrite";
import { account } from "./config";

export async function createUserAccount(user: INewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.username,
      user.email,
      user.password
    );
  } catch (error) {
    console.error(error);
    return error;
  }
}
