
import {
  Controller, Get, Post, Body,
  Patch, Param, Delete,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

//Responsável por lidar com as requisições relacionadas as categorias
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  //Cria um novo produto no banco
  @Post('/new')
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  //Recupera todas as categorias do banco
  @Get('/all')
  findAll() {
    return this.categoryService.findAll();
  }

  //Recupera um único produto com base no ID fornecido
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  @Patch('/update/:id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
