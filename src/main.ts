import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configuração de porta dinâmica
  const port = process.env.PORT || 3000;
  
  // Configuração do logger
  const logger = new Logger('Bootstrap');
  app.useLogger(logger);

  // Configuração do corpo da requisição
  app.use(bodyParser.json({ limit: '5mb' }));
  app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));

  // Configuração do pipe de validação global
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port);
  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
