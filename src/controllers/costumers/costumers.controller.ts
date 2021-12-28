import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

import { CustomersService } from 'src/services/customers/customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../../dtos/customers.dto';
import { ParseIntPipe } from '../../common/parse-int.pipe';

@Controller('costumers')
export class CostumersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  getUsers() {
    return this.customersService.findAll();
  }

  @Get('userfilter')
  getCustomerFilter() {
    return `yo soy un filter`;
  }

  @Get(':customerId')
  get(@Param('customerId', ParseIntPipe) id: number) {
    return this.customersService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateCustomerDto) {
    console.log(payload);
    return this.customersService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateCustomerDto) {
    return this.customersService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.customersService.remove(+id);
  }
}
