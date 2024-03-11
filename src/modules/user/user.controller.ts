import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Post,
  Put,
} from '@nestjs/common';
import { StatusCodes } from 'http-status-codes';
import { ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';
import { IUser, IUserWithoutPassword } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserPasswordDto } from './dto/update.user.password.dto';
import { User } from '../../common/decorators/user.decorator';

@Controller('user')
@ApiTags('track')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAllUser(): IUserWithoutPassword[] {
    return this.userService.getAllUsers();
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): IUserWithoutPassword {
    return this.userService.createUser(createUserDto);
  }

  @Get(':id')
  getUserById(@User() user: IUser): IUserWithoutPassword {
    return this.userService.getUsersById(user);
  }

  @Put(':id')
  updateUserPasswordById(
    @User() user: IUser,
    @Body() updateUserPasswordDto: UpdateUserPasswordDto,
  ): IUserWithoutPassword {
    return this.userService.updateUserPasswordById(
      updateUserPasswordDto,
      user.id,
    );
  }

  @Delete(':id')
  @HttpCode(StatusCodes.NO_CONTENT)
  deleteUserById(@User() user: IUser) {
    return this.userService.deleteUserById(user.id);
  }
}
