import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { UserDto } from './dto/user-dto.interface';
@Injectable()
export class UsersService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
        ){}
        
    async getAllUsers() {
        return await this.userModel.find().exec();
    }

    async findUserById(id: string) {
        return await this.userModel.findById(id).exec();
    }

    async createUser(user: UserDto) {
        const newUser = new this.userModel(user);
        return newUser.save();
    }
}
