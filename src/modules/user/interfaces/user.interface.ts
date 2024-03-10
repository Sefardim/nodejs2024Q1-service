export interface IUser {
  id: string; // uuid v4
  login: string;
  password: string;
  version: number; // integer number, increments on update
  createdAt: number; // timestamp of creation
  updatedAt: number; // timestamp of last update
}

export interface ICreateUser {
  login: string;
  password: string;
}

export interface IUpdateUserPassword {
  oldPassword: string;
  newPassword: string;
}

export type IUserWithoutPassword = Omit<IUser, 'password'>;
