
import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService {
  //Injetar o repositório associado
  constructor(
    @InjectRepository(Category) private repository: Repository<Category>,
  ) {}

   //Cria uma nova instância com base nos dados fornecidos no DTO
  create(createCategoryDto: CreateCategoryDto) {
    const category = this.repository.create(createCategoryDto);
    return this.repository.save(category);
  }

  //Recupera todos os produtos
  findAll() {
    return this.repository.find();
  }

  //Recupera um único produto com o ID correspondente
  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
