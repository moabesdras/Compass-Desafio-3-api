
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  //Injetar o repositório associado
  constructor(
    @InjectRepository(Product) private repository: Repository<Product>,
  ) {}

  //Cria uma nova instância com base nos dados fornecidos no DTO
  create(createProductDto: CreateProductDto) {
    const product = this.repository.create(createProductDto);
    return this.repository.save(product);
  }

  //Recupera todos os produtos
  findAll() {
    return this.repository.find();
  }

  //Recupera um único produto com o ID correspondente
  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
