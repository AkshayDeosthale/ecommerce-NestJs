import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

export interface Category extends Document {
  readonly name: string;
  readonly subcategories: {
    name: string;
    id?: string;
  }[];
  readonly numberOfProducts: number;
}

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CATEGORY_MODEL')
    private categoryModel: Model<Category>,
  ) {}

  create(createCategoryDto: CreateCategoryDto) {
    const createdCategory = new this.categoryModel(createCategoryDto);
    return createdCategory.save();
  }

  findAll() {
    return this.categoryModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
