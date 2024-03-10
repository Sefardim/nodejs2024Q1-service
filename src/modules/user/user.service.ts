import { Injectable } from '@nestjs/common';
import { IUser, IUserWithoutPassword } from './interfaces/user.interface';
import {
  createUser,
  deleteUserById,
  getAllUsers,
  updateUserPasswordById,
} from '../../database/users';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserPasswordDto } from './dto/update.user.password.dto';

@Injectable()
export class UserService {
  getAllUsers(): IUserWithoutPassword[] {
    return getAllUsers();
  }

  getUsersById(user: IUser): IUserWithoutPassword {
    return {
      id: user.id,
      login: user.login,
      version: user.version,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  createUser(createUserDto: CreateUserDto): IUserWithoutPassword {
    return createUser(createUserDto);
  }

  updateUserPasswordById(
    updateUserPasswordDto: UpdateUserPasswordDto,
    id: string,
  ): IUserWithoutPassword {
    return updateUserPasswordById(id, updateUserPasswordDto);
  }

  deleteUserById(id: string): void {
    return deleteUserById(id);
  }
}
