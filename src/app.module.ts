import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './app.gateway';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    AuthModule, 
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost/hello-world',{
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
