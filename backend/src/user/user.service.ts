import { Injectable, NotFoundException } from '@nestjs/common'
import { UpdateUserDto } from './dto/update-user.dto'
import { PrismaService } from 'src/prisma.service'
import { hash } from 'bcrypt'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { SignUpUserDto } from '../auth/dto/sign-up-user.dto'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async create(signUpUserDto: SignUpUserDto) {
    if (signUpUserDto.password) {
      signUpUserDto.password = await hash(signUpUserDto.password, 12)
    }
    try {
      const user = await this.prisma.user.create({ data: signUpUserDto })
      return {
        status: true,
        code: 201,
        data: { name: user.name, email: user.email },
        message: 'User created successfully'
      }
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code == 'P2002') {
          return {
            status: false,
            code: 400,
            data: null,
            message: 'The email has been taken'
          }
        }
      }
    }
  }

  // findAll() {
  //   return `This action returns all user`
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`
  // }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email
      }
    })
    return user
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.prisma.user.update({
        where: {
          id
        },
        data: updateUserDto
      })
      const { password, ...result } = user
      return {
        statusCode: 200,
        success: true,
        data: result,
        message: 'Success update user'
      }
    } catch (error) {
      throw new NotFoundException()
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.user.delete({
        where: {
          id
        }
      })
      return {
        statusCode: 200,
        success: true,
        message: 'Success delete user'
      }
    } catch (error) {
      throw new NotFoundException()
    }
  }
}
