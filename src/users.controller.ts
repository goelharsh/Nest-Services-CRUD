import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user-dto";
import { UsersService } from "./users.service";


@Controller('/users')
export class UsersController{

   constructor(private usersService: UsersService){}

     @Post()
     createUser(@Body() createUserDTO: CreateUserDTO){
      this.usersService.addUser(createUserDTO);
        return { message: 'USER ADDED'}
     }

     @Get()
     findAllUsers(){
      return this.usersService.getUsers();
     }

     @Get(':id')
     findUser(@Param('id') id: number){
      return this.usersService.getUser(+id)
     }

     @Put(':id')
     updateUser(@Param('id') id: number, updateUserDTO: CreateUserDTO){
      this.usersService.updateUser(+id, updateUserDTO)
        return { message: 'USER UPDATED'}
     }
     
     @Delete(':id')
     deleteUser(@Param('id') id: number){
      this.usersService.deleteUser(+id)
        return { message: 'USER DELETED'}

     }

}