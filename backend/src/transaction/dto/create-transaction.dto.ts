import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateTransactionDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string
  @ApiProperty()
  description: string
  @ApiProperty({ enum: ['DEBIT', 'CREDIT'] })
  @IsNotEmpty()
  type: string
  userId: string
  @ApiProperty()
  @IsNotEmpty()
  amount: number
  @ApiProperty()
  @IsNotEmpty()
  walletId: string
  @ApiProperty()
  @IsNotEmpty()
  categoryId: string
}
