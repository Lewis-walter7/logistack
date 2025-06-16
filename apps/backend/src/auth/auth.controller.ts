// auth/auth.controller.ts
import { Controller, Post, Body, Res, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(
    @Body() body: { email: string; password: string },
    @Res({ passthrough: true }) res: Response,
  ) {
    const user = await this.authService.validateUser(body.email, body.password);
    const token = await this.authService.login(user);

    res.cookie('authToken', token, {
      httpOnly: true,
      secure: false, // true in production
      sameSite: 'lax',
      path: '/',
    });

    return { message: 'Login successful' };
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('authToken');
    return { message: 'Logged out' };
  }
}
