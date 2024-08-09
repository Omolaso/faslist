import { Dispatch, SetStateAction } from "react";

export interface UserData {
  _id: string;
  username: string;
  phoneNumber: string;
  email: string;
  profilePicture: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserContextProps {
  user: UserData | null;
  setUser: Dispatch<SetStateAction<UserData | null>>;
}
