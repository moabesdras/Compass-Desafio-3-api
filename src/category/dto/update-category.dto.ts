
import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';

//Reutiliza as propriedades do DTO de criação e torna opcional
export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
