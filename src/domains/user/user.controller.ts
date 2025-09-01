import { Body, Controller, Get, Put, Post, Delete, HttpStatus, UseGuards, Res, Param } from '@nestjs/common';
import { UserService } from '@domains/user/user.service';
import { Guard } from '@domains/guard';
import { Response } from 'express';
import { IUserCreate, IUserUpdate } from '@entities/user.entity';


@Controller('user')
@UseGuards(Guard)
export class UserController {

    constructor(private readonly user: UserService) {}

    @Get()
     async getAll(@Res() res: Response) {
        try {
            return res.status(HttpStatus.ACCEPTED).json(await this.user.findAll())
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error)
        }
    }

    @Post()
    async create(@Body() body: IUserCreate, @Res() res: Response) {
        try {
            return res.status(HttpStatus.ACCEPTED).json(await this.user.create(body))
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error)
        }
    }

    @Put()
     async update(@Body() body: IUserUpdate, @Res() res: Response) {
        try {
            return res.status(HttpStatus.ACCEPTED).json(await this.user.update(body))
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error)
        }
    }
    @Delete(':id')
     async delete(@Param() param: { id: number }, @Res() res: Response) {
        try {
            return res.status(HttpStatus.ACCEPTED).json(await this.user.delete(param))
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error)
        }
    }
}