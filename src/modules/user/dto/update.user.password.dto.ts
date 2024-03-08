import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

import { IUpdateUserPassword } from '../interfaces/user.interface';

export class UpdateUserPasswordDto implements IUpdateUserPassword {
  @ApiProperty()
  @IsString({ message: 'User oldPassword must be  string' })
  oldPassword: string;

  @ApiProperty()
  @IsString({ message: 'User newPassword must be  string' })
  newPassword: string;
}
