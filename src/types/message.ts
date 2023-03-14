import { ObjectId } from "mongodb";

export type Message = {
  _id?: ObjectId;
  email: string;
  name: string;
  message: string;
};
