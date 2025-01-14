import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards } from '@nestjs/common'
import { UserService } from './user.service'
import { UpdateUserDto } from './dto/update-user.dto'
import { ApiBearerAuth } from '@nestjs/swagger'
import { AuthGuard } from '../auth/auth.guard'

@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Post()
  // create(@Body() createUserDto: SignUpUserDto) {
  //   return this.userService.create(createUserDto)
  // }

  // @Get()
  // findAll() {
  //   return this.userService.findAll()
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id)
  // }

  @Patch()
  update(@Request() request, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(request.userId, updateUserDto)
  }

  @Delete()
  remove(@Request() request) {
    return this.userService.remove(request.userId)
  }
}
