// 自己编写controllr,module和service
import { Controller, Get, Post, Body, Patch, Param, Delete,Request,Query,Headers } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { query } from 'express';


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    findAll(@Query() query){
        console.log(query)
        return {
            code:200,
            message:query.name
        }
    }

    @Post()
    // 如果你只想获取name值，不获取其他的
    // created(@Body() body) {
    created(@Body('name') body) {
        console.log(body)
        return {
            code:200,
            message:body
        }
    }

    // 动态路由请求测试，注释了方便写header
    // @Get(':id')
    // // 如果你只想获取id值，不获取其他的
    // findId(@Param('id') params){
    //     console.log(params)
    //     return{
    //         code:200,
    //         message:params
    //     }
    // }

    // 测试header，借用下动态请求的壳子
    @Get(':id')
    findId(@Headers() headers){
        console.log(headers)
        return{
            code:200,
            message:headers
        }
    }


}
