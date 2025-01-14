import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateWalletDto } from './dto/create-wallet.dto'
import { UpdateWalletDto } from './dto/update-wallet.dto'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class WalletService {
  constructor(private prisma: PrismaService) {}
  async create(createWalletDto: CreateWalletDto) {
    const wallet = await this.prisma.wallet.create({ data: createWalletDto })
    return {
      statusCode: 201,
      success: true,
      data: wallet,
      message: 'Success create a wallet'
    }
  }

  async findAll(userId: string) {
    const wallets = await this.prisma.wallet.findMany({
      where: {
        userId
      },
      select: {
        name: true,
        id: true,
        userId: true
      }
    })
    return {
      statusCode: 200,
      success: true,
      data: wallets,
      message: 'Success retrieve all user wallets'
    }
  }

  async findOne(id: string, userId: string) {
    const wallet = await this.prisma.wallet.findMany({
      where: {
        id,
        userId
      },
      select: {
        name: true,
        id: true,
        userId: true
      }
    })
    if (wallet.length) {
      return {
        statusCode: 200,
        success: true,
        data: wallet,
        message: 'Success retrieve wallet'
      }
    }
    throw new NotFoundException()
  }

  async update(id: string, updateWalletDto: UpdateWalletDto, userId: string) {
    try {
      const wallet = await this.prisma.wallet.update({
        where: {
          id,
          userId
        },
        data: {
          ...updateWalletDto
        }
      })
      return {
        statusCode: 200,
        success: true,
        data: wallet,
        message: 'Success update wallet'
      }
    } catch (error) {
      throw new NotFoundException()
    }
  }

  async remove(id: string, userId: string) {
    try {
      await this.prisma.wallet.delete({
        where: {
          id,
          userId
        }
      })
      return {
        statusCode: 200,
        success: true,
        message: 'Success delete wallet'
      }
    } catch (error) {
      throw new NotFoundException()
    }
  }
}
