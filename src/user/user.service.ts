import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export interface User extends Document {
  readonly fullname: string;
  readonly phone: string;
  readonly email: string;
  readonly password: string;
  readonly username: string;
}

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const tempUser = { ...createUserDto, cash: 0 };
    const newUser = new this.userModel(tempUser);
    return newUser.save();
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto): any {
    return this.userModel.updateOne({ _id: id }, { $set: updateUserDto });
  }

  remove(id: string): any {
    return this.userModel.deleteOne({ _id: id });
  }
}
