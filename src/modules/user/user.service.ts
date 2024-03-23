import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { IUserWithoutPassword } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserPasswordDto } from './dto/update.user.password.dto';
import { PrismaService } from '../../../prisma/prisma.service';

const startOfVersion = 1;

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllUsers(): Promise<IUserWithoutPassword[]> {
    return await this.prisma.user.findMany({
      select: {
        id: true,
        login: true,
        version: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async getUsersById(id: string): Promise<IUserWithoutPassword> {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        login: true,
        version: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async createUser(
    createUserDto: CreateUserDto,
  ): Promise<IUserWithoutPassword> {
    const user = {
      ...createUserDto,
      version: startOfVersion,
      createdAt: Date.now() / 1000,
      updatedAt: Date.now() / 1000,
    };

    const userFromDb = await this.prisma.user.create({ data: user });

    return {
      id: userFromDb.id,
      login: userFromDb.login,
      version: userFromDb.version,
      createdAt: userFromDb.createdAt,
      updatedAt: userFromDb.updatedAt,
    };
  }

  async updateUserPasswordById(
    updateUserPasswordDto: UpdateUserPasswordDto,
    id: string,
  ): Promise<IUserWithoutPassword> {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user.password !== updateUserPasswordDto.oldPassword) {
      throw new ForbiddenException('Old password is wrong');
    }

    const updatedUser = await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        ...user,
        password: updateUserPasswordDto.newPassword,
        updatedAt: Date.now() / 1000,
        version: {
          increment: 1,
        },
      },
    });

    return {
      id: updatedUser.id,
      login: updatedUser.login,
      version: updatedUser.version,
      createdAt: updatedUser.createdAt,
      updatedAt: updatedUser.updatedAt,
    };
  }

  async deleteUserById(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id,
      },
    });
    return;
  }
}
