
import { Injectable } from '@nestjs/common';

//Definindo serviço
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
