import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common'
import { TransactionService } from './transaction.service'
import { CreateTransactionDto } from './dto/create-transaction.dto'
import { UpdateTransactionDto } from './dto/update-transaction.dto'
import { ApiBearerAuth } from '@nestjs/swagger'
import { AuthGuard } from '../auth/auth.guard'

@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  create(@Request() request, @Body() createTransactionDto: CreateTransactionDto) {
    const payload = {
      ...createTransactionDto,
      userId: request.userId
    }
    return this.transactionService.create(payload)
  }

  @Get()
  findAll(@Request() request) {
    return this.transactionService.findAll(request.userId)
  }

  @Get(':id')
  findOne(@Request() request, @Param('id') id: string) {
    return this.transactionService.findOne(id, request.userId)
  }

  @Patch(':id')
  update(@Request() request, @Param('id') id: string, @Body() updateTransactionDto: UpdateTransactionDto) {
    return this.transactionService.update(id, updateTransactionDto, request.userId)
  }

  @Delete(':id')
  remove(@Request() request, @Param('id') id: string) {
    return this.transactionService.remove(id, request.userId)
  }
}
