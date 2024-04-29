/*Configurando a conexão com o banco de dados,
importando os módulos relacionados a categorias
e produtos, e definindo o controlador e o serviço
principal da aplicação.*/

import { Module } from '@nestjs/common';
//Requisições
import { AppController } from './app.controller';
//Lógica de negócio
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { Category } from './category/entities/category.entity';
import { Product } from './product/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'senhapg',
      database: 'ecommerce-challenge',
      entities: [Category, Product],
      synchronize: true,
    }),
    CategoryModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
