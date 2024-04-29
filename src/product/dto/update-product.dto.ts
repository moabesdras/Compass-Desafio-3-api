
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

//Reutiliza as propriedades do DTO de criação e torna opcional
export class UpdateProductDto extends PartialType(CreateProductDto) {}
