import { Controller, Get, Param, Query } from '@nestjs/common';
import { StringDecoder } from 'string_decoder';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'hola como estan';
  }

  @Get('new')
  newEndpoint() {
    return 'you soy nuevo';
  }

  @Get('/new/route')
  new() {
    return 'esto es una nueva prueba';
  }
}
