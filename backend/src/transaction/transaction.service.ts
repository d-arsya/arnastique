import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateTransactionDto } from './dto/create-transaction.dto'
import { UpdateTransactionDto } from './dto/update-transaction.dto'
import { PrismaService } from '../prisma.service'

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}
  async create(createTransactionDto: CreateTransactionDto) {
    const transaction = await this.prisma.transaction.create({ data: createTransactionDto })
    return {
      status: true,
      code: 201,
      data: { name: transaction.name, amount: transaction.amount },
      message: 'Transaction created successfully'
    }
  }

  async findAll(userId: string) {
    const transactions = await this.prisma.transaction.findMany({
      where: {
        userId
      }
    })
    return {
      statusCode: 200,
      success: true,
      data: transactions,
      message: 'Success retrieve all user transactions'
    }
  }

  async findOne(id: string, userId: string) {
    const transaction = await this.prisma.transaction.findFirst({
      where: {
        id,
        userId
      }
    })
    if (transaction) {
      return {
        statusCode: 200,
        success: true,
        data: transaction,
        message: 'Success retrieve transaction'
      }
    }
    throw new NotFoundException()
  }

  async update(id: string, updateTransactionDto: UpdateTransactionDto, userId: string) {
    try {
      const transaction = await this.prisma.transaction.update({
        where: {
          id,
          userId
        },
        data: {
          ...updateTransactionDto
        }
      })
      return {
        statusCode: 200,
        success: true,
        data: transaction,
        message: 'Success update transaction'
      }
    } catch (error) {
      throw new NotFoundException()
    }
  }

  async remove(id: string, userId: string) {
    try {
      await this.prisma.transaction.delete({
        where: {
          id,
          userId
        }
      })
      return {
        statusCode: 200,
        success: true,
        message: 'Success delete transaction'
      }
    } catch (error) {
      throw new NotFoundException()
    }
  }
}
