import { Client, Account, Databases, Storage, Avatars } from "appwrite";
console.log(import.meta.env.APPWRITE_ID);
export const appwriteConfig = {
  projectId: import.meta.env.APPWRITE_ID,
  url: import.meta.env.APPWRITE_URL,
};

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
