import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
  //ParseIntPipe,
} from '@nestjs/common';

import { UsersService } from 'src/services/users/users.service';
import { CreateUserDto, UpdateUserDto } from 'src/dtos/users.dto';
import { ParseIntPipe } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.usersService.findAll();
  }

  @Get('userfilter')
  getUserFilter() {
    return `yo soy un filter`;
  }

  @Get(':userId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    return this.usersService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateUserDto) {
    console.log(payload);
    return this.usersService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateUserDto) {
    return this.usersService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.usersService.remove(+id);
  }
}
