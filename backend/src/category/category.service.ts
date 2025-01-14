import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'
import { PrismaService } from '../prisma.service'

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  async create(createCategoryDto: CreateCategoryDto) {
    const category = await this.prisma.category.create({ data: createCategoryDto })
    return {
      statusCode: 201,
      success: true,
      data: category,
      message: 'Success create a category'
    }
  }

  async findAll(userId: string) {
    const categories = await this.prisma.category.findMany({
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
      data: categories,
      message: 'Success retrieve all user categories'
    }
  }

  async findOne(id: string, userId: string) {
    const category = await this.prisma.category.findFirst({
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
    if (category) {
      return {
        statusCode: 200,
        success: true,
        data: category,
        message: 'Success retrieve category'
      }
    }
    throw new NotFoundException()
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto, userId: string) {
    try {
      const category = await this.prisma.category.update({
        where: {
          id,
          userId
        },
        data: {
          ...updateCategoryDto
        }
      })
      return {
        statusCode: 200,
        success: true,
        data: category,
        message: 'Success update category'
      }
    } catch (error) {
      throw new NotFoundException()
    }
  }

  async remove(id: string, userId: string) {
    try {
      await this.prisma.category.delete({
        where: {
          id,
          userId
        }
      })
      return {
        statusCode: 200,
        success: true,
        message: 'Success delete category'
      }
    } catch (error) {
      throw new NotFoundException()
    }
  }
}
