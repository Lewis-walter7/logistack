import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
    async register(@Body() body, @Res() res: Response) {
        const user = await this.authService.register(body);
        const token = await this.authService.login(user);

        res.cookie("token", token.access_token, {
            httpOnly: true,
            secure: true, // Set to true if using HTTPS
        }).send({ user})
    }


    @Post('login')
    async login(@Body() body, @Res() res: Response) {
        const user = await this.authService.validateUser(body.email, body.password);
        if (!user) {
            return res.status(401).send({ message: 'Invalid credentials' });
        }
        const token = await this.authService.login(user);

        res.cookie("token", token.access_token, {
            httpOnly: true,
            secure: true, // Set to true if using HTTPS
        }).send({ user });
    }

}
