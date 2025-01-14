import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards } from '@nestjs/common'
import { WalletService } from './wallet.service'
import { CreateWalletDto } from './dto/create-wallet.dto'
import { UpdateWalletDto } from './dto/update-wallet.dto'
import { AuthGuard } from 'src/auth/auth.guard'
import { ApiBearerAuth } from '@nestjs/swagger'

@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post()
  create(@Request() request, @Body() { name }) {
    const payload = {
      name: name,
      userId: request.userId
    }
    return this.walletService.create(payload)
  }

  @Get()
  findAll(@Request() request) {
    return this.walletService.findAll(request.userId)
  }

  @Get(':id')
  findOne(@Request() request, @Param('id') id: string) {
    return this.walletService.findOne(id, request.userId)
  }

  @Patch(':id')
  update(@Request() request, @Param('id') id: string, @Body() updateCategoryDto: UpdateWalletDto) {
    return this.walletService.update(id, updateCategoryDto, request.userId)
  }

  @Delete(':id')
  remove(@Request() request, @Param('id') id: string) {
    return this.walletService.remove(id, request.userId)
  }
}
