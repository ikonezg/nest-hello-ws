import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { UsersController } from './users.controller';

@Module({
  imports: [MongooseModule.forFeature([
    {name: 'User', schema: UserSchema}
  ])],
  exports: [MongooseModule],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
