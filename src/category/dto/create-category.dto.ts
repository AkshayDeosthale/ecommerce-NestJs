import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  subcategories: {
    name: string;
    id?: string;
  }[];

  numberOfProducts: number;
}
