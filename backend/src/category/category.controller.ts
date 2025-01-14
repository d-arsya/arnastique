import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common'
import { CategoryService } from './category.service'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'
import { AuthGuard } from '../auth/auth.guard'
import { ApiBearerAuth, ApiHeader } from '@nestjs/swagger'

@ApiBearerAuth()
@Controller('category')
@UseGuards(AuthGuard)
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Request() request, @Body() createCategoryDto: CreateCategoryDto) {
    const payload = {
      name: createCategoryDto.name,
      userId: request.userId
    }
    return this.categoryService.create(payload)
  }

  @Get()
  findAll(@Request() request) {
    return this.categoryService.findAll(request.userId)
  }

  @Get(':id')
  findOne(@Request() request, @Param('id') id: string) {
    return this.categoryService.findOne(id, request.userId)
  }

  @Patch(':id')
  update(@Request() request, @Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(id, updateCategoryDto, request.userId)
  }

  @Delete(':id')
  remove(@Request() request, @Param('id') id: string) {
    return this.categoryService.remove(id, request.userId)
  }
}
