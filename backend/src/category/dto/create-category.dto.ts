import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class CreateCategoryDto {
  userId: string
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string
}
