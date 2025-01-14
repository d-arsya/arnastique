import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty } from 'class-validator'

export class SignUpUserDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string
  @IsNotEmpty()
  @ApiProperty()
  password: string
  avatar?: string
}
