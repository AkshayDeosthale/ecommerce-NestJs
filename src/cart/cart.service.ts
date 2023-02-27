import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Product } from 'src/product/product.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartService {
  constructor(
    @Inject('PRODUCT_MODEL')
    private productModel: Model<Product>,
  ) {}

  create(id: string): any {
    return this.productModel.updateOne({ _id: id }, { $set: { inCart: true } });
  }

  findAll() {
    return this.productModel.find({ inCart: true });
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: string): any {
    return this.productModel.updateOne(
      { _id: id },
      { $set: { inCart: false } },
    );
  }
}
