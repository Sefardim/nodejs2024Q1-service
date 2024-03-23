import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { ICreateUser } from '../interfaces/user.interface';

export class CreateUserDto implements ICreateUser {
  @ApiProperty({
    required: true,
    description: 'User login',
    example: 'The best admin',
    type: String,
  })
  @IsString({ message: 'User login must be  string' })
  login: string;

  @ApiProperty({
    required: true,
    description: 'User password',
    example: 'qwerty',
    type: String,
  })
  @IsString({ message: 'User password must be  string' })
  password: string;
}
