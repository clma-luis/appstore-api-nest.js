import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsEmail,
  Length,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsNumber()
  @IsNotEmpty()
  readonly id: number;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  readonly mail: string;

  @IsString()
  @IsNotEmpty()
  @Length(8)
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  readonly role: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
