import { Injectable, NotFoundException } from '@nestjs/common';
import { Costumer } from 'src/entities/custormer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../../dtos/customers.dto';

@Injectable()
export class CustomersService {
  private counterId = 1;
  private costumers: Costumer[] = [
    {
      id: 1,
      name: 'Carlos',
      lastName: 'Marin',
      phone: '45776935',
    },
  ];

  findAll() {
    return this.costumers;
  }

  findOne(id: number) {
    const costumer = this.costumers.find((item) => item.id === id);
    if (!costumer) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return costumer;

    /* const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product; */
  }

  create(payload: CreateCustomerDto) {
    this.counterId = this.counterId + 1;
    const newCustomer = {
      id: this.counterId,
      ...payload,
    };
    this.costumers.push(newCustomer);
    return newCustomer;
  }

  update(id: number, payload: UpdateCustomerDto) {
    const customer = this.findOne(id);
    if (customer) {
      const index = this.costumers.findIndex((item) => item.id === id);
      this.costumers[index] = {
        ...customer,
        ...payload,
      };
      return this.costumers[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.costumers.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.costumers.splice(index, 1);
    return { id };
  }
}
