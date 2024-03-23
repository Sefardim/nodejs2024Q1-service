import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { StatusCodes } from 'http-status-codes';
import { ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';
import { IUserWithoutPassword } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserPasswordDto } from './dto/update.user.password.dto';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Header('Content-Type', 'application/json')
  getAllUser(): Promise<IUserWithoutPassword[]> {
    return this.userService.getAllUsers();
  }

  @Post()
  @Header('Content-Type', 'application/json')
  createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<IUserWithoutPassword> {
    return this.userService.createUser(createUserDto);
  }

  @Get(':id')
  @Header('Content-Type', 'application/json')
  getUserById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<IUserWithoutPassword> {
    return this.userService.getUsersById(id);
  }

  @Put(':id')
  @Header('Content-Type', 'application/json')
  updateUserPasswordById(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserPasswordDto: UpdateUserPasswordDto,
  ): Promise<IUserWithoutPassword> {
    return this.userService.updateUserPasswordById(updateUserPasswordDto, id);
  }

  @Delete(':id')
  @Header('Content-Type', 'application/json')
  @HttpCode(StatusCodes.NO_CONTENT)
  deleteUserById(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return this.userService.deleteUserById(id);
  }
}
