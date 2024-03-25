import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

import { IUpdateUserPassword } from '../interfaces/user.interface';

export class UpdateUserPasswordDto implements IUpdateUserPassword {
  @ApiProperty({
    required: true,
    description: 'User old password',
    example: 'oldPassword123',
    type: String,
  })
  @IsString({ message: 'User oldPassword must be  string' })
  oldPassword: string;

  @ApiProperty({
    required: true,
    description: 'User new password',
    example: 'qwertyIsTheBestPassword',
    type: String,
  })
  @IsString({ message: 'User newPassword must be string' })
  newPassword: string;
}
