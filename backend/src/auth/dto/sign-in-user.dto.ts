import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty } from 'class-validator'

export class SignInUserDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string
  @IsNotEmpty()
  @ApiProperty()
  password: string
}
