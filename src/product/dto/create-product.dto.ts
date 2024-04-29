
import {
  IsBoolean, IsDate, IsInt, IsNumber, IsOptional,
  IsPositive, IsString, Length, Max, Min,
} from 'class-validator';

export class CreateProductDto {
  @Length(3, 50)
  @IsString()
  name: string;

  @Length(1, 10)
  @IsString()
  sku: string;

  @IsInt()
  @IsPositive()
  category_id: number;

  @Length(10, 250)
  @IsString()
  description: string;

  @Length(10, 500)
  @IsString()
  large_description: string;

  @Min(0.1)
  @IsPositive()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  price: number;

  @IsOptional()
  @IsPositive()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  discount_price: number;

  @IsOptional()
  @Max(100)
  @IsPositive()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  discount_percent: number;

  @IsBoolean()
  is_new: boolean;

  @Length(5, 250)
  @IsString()
  image_link: string;

  @IsOptional()
  @Length(5, 1000)
  @IsString()
  other_image_link: string;

  @IsOptional()
  @IsDate()
  created_date: Date;

  @IsOptional()
  @IsDate()
  updated_date: Date;
}
