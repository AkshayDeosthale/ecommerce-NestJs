import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

export interface Product extends Document {
  readonly name: string;
  readonly cost: number;
  readonly image: string;
}

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_MODEL')
    private productModel: Model<Product>,
  ) {}

  create(createProductDto: CreateProductDto): Promise<Product> {
    const temp = { ...createProductDto, inCart: false };
    const createdProduct = new this.productModel(temp);
    return createdProduct.save();
  }

  findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  findOne(id: string): any {
    return this.productModel.findById(id).exec();
  }

  update(id: string, updateProductDto: UpdateProductDto): any {
    return this.productModel.updateOne({ _id: id }, { $set: updateProductDto });
  }

  remove(id: string): any {
    return this.productModel.deleteOne({ _id: id });
  }
}
