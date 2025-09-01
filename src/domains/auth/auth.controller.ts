import { Body, Controller, Get, Post, HttpStatus, UseGuards, Res } from '@nestjs/common';
import { AuthService } from '@domains/auth/auth.service';
import { Guard } from '@domains/guard';
import { Response } from 'express';

@Controller('auth')
export class AuthController {

    constructor(private readonly auth: AuthService) {}

    @Post('login')
    async login(@Body() body: { username: string, password: string }, @Res() res: Response) {
        try {
            return res.status(HttpStatus.ACCEPTED).json(await this.auth.login(body))
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error)
        }
    }

    @Get('validate')
    @UseGuards(Guard)
    validate() {
        return { message: 'You are authenticated', statusCode: 200 };
    }
}