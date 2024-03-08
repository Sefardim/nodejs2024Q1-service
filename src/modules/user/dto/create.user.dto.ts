import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { ICreateUser } from '../interfaces/user.interface';

export class CreateUserDto implements ICreateUser {
  @ApiProperty()
  @IsString({ message: 'User login must be  string' })
  login: string;

  @ApiProperty()
  @IsString({ message: 'User password must be  string' })
  password: string;
}
