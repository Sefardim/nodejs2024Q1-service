import { v4 as uuidv4 } from 'uuid';
import { ForbiddenException } from '@nestjs/common';

import {
  IUser,
  IUserWithoutPassword,
} from '../modules/user/interfaces/user.interface';
import { CreateUserDto } from '../modules/user/dto/create.user.dto';
import { UpdateUserPasswordDto } from '../modules/user/dto/update.user.password.dto';

const startOfVersion = 1;

export const UsersDB: IUser[] = [];

export const getAllUsers = () => {
  return UsersDB.map((user) => {
    return {
      id: user.id,
      login: user.login,
      version: user.version,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  });
};

export const createUser = (
  createUserDto: CreateUserDto,
): IUserWithoutPassword => {
  const user = {
    ...createUserDto,
    id: uuidv4(),
    version: startOfVersion,
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  };

  UsersDB.push(user);

  return {
    id: user.id,
    login: user.login,
    version: user.version,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};

export const updateUserPasswordById = (
  id: string,
  updateUserPasswordDto: UpdateUserPasswordDto,
): IUserWithoutPassword => {
  const currentUserIndex = UsersDB.findIndex((user) => user.id === id);
  let currentUser = UsersDB.find((user) => user.id === id);

  if (currentUser.password !== updateUserPasswordDto.oldPassword) {
    throw new ForbiddenException('Old password is wrong');
  }

  currentUser = {
    ...currentUser,
    password: updateUserPasswordDto.newPassword,
    version: currentUser.version + 1,
    updatedAt: new Date().getTime(),
  };
  UsersDB[currentUserIndex] = currentUser;
  return {
    id: currentUser.id,
    login: currentUser.login,
    version: currentUser.version,
    createdAt: currentUser.createdAt,
    updatedAt: currentUser.updatedAt,
  };
};

export const getUserByIdWithPassword = (id: string) => {
  return UsersDB.find((user) => user.id === id);
};

export const deleteUserById = (id: string): void => {
  const currentUserIndex = UsersDB.findIndex((user) => user.id === id);
  UsersDB.splice(currentUserIndex, 1);
};
