import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user-dto.interface';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}

    @Get(':id')
    getUser(@Param('id') userId: string) {
        return this.userService.findUserById(userId);
    }

    @Get()
    getUsers() {
        return this.userService.getAllUsers();
    }

    @Post()
    postNewUser(@Body() user: UserDto){
        return this.userService.createUser(user);
    }

}
