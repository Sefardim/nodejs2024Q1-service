import { v4 as uuidv4 } from 'uuid';

import { IUser } from '../modules/user/interfaces/user.interface';
import { CreateUserDto } from '../modules/user/dto/create.user.dto';
import { UpdateUserPasswordDto } from '../modules/user/dto/update.user.password.dto';

const startOfVersion = 1;

export const UsersDB: IUser[] = [];

export const createUser = (createUserDto: CreateUserDto): IUser => {
  const user = {
    ...createUserDto,
    id: uuidv4(),
    version: startOfVersion,
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  };

  UsersDB.push(user);

  return user;
};

export const updateUserPasswordById = (
  id: string,
  updateUserPasswordDto: UpdateUserPasswordDto,
): IUser => {
  const currentUserIndex = UsersDB.findIndex((user) => user.id === id);
  let currentUser = UsersDB.find((user) => user.id === id);
  currentUser = {
    ...currentUser,
    ...updateUserPasswordDto,
    version: currentUser.version + 1,
    updatedAt: new Date().getTime(),
  };
  UsersDB[currentUserIndex] = currentUser;
  return currentUser;
};

export const isUserExist = (id: string): boolean => {
  return !!UsersDB.find((user) => user.id === id);
};

export const getUserById = (id: string): IUser => {
  return UsersDB.find((user) => user.id === id);
};

export const deleteUserById = (id: string): void => {
  const currentUserIndex = UsersDB.findIndex((user) => user.id === id);
  UsersDB.splice(currentUserIndex, 1);
};
