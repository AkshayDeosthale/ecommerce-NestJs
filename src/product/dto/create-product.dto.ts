import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  subcategory: string;

  @IsString()
  @IsNotEmpty()
  gender: string;

  @IsNumber()
  @IsNotEmpty()
  cost: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsNumber()
  @IsNotEmpty()
  discount: number;

  @IsBoolean()
  inCart: boolean;

  @IsBoolean()
  @IsNotEmpty()
  isWishlist: boolean;

  @IsBoolean()
  @IsNotEmpty()
  isReturnable: boolean;

  @IsBoolean()
  @IsNotEmpty()
  isReplacable: boolean;

  images: {
    name: string;
    url: string;
  }[];

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsObject()
  specification: {
    weight: number;
    dimentions: string;
    itemsInPackage: number;
  };
}
