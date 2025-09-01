import { Body, Controller, Get, Put, Post, Delete, HttpStatus, UseGuards, Res, Param } from '@nestjs/common';
import { FinanceService } from '@domains/finance/finance.service';
import { Guard } from '@domains/guard';
import { Response } from 'express';
import { IUserCreate, IUserUpdate } from '@entities/user.entity';


@Controller('finance')
@UseGuards(Guard)
export class FinanceController {

    constructor(private readonly finance: FinanceService) {}

    @Get()
     async getAll(@Res() res: Response) {
        try {
            return res.status(HttpStatus.ACCEPTED).json(await this.finance.findAll())
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error)
        }
    }

    @Post()
    async create(@Body() body: IUserCreate, @Res() res: Response) {
        try {
            return res.status(HttpStatus.ACCEPTED).json(await this.finance.create(body))
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error)
        }
    }

    @Put()
     async update(@Body() body: IUserUpdate, @Res() res: Response) {
        try {
            return res.status(HttpStatus.ACCEPTED).json(await this.finance.update(body))
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error)
        }
    }
    @Delete(':id')
     async delete(@Param() param: { id: number }, @Res() res: Response) {
        try {
            return res.status(HttpStatus.ACCEPTED).json(await this.finance.delete(param))
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error)
        }
    }
}