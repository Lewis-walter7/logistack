import { Body, Injectable, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt'
import { access } from 'fs';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService, 
        private jwtService: JwtService// Assuming you have a UsersService to handle user data
    ) {}

    async validateUser(email: string, password: string){
        const user = await this.usersService.findByEmail(email);
        if (user && await bcrypt.compare(password, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = {
            sub: user.id,
            email: user.email,
            role: user.role,
        }

        return {
            access_token: this.jwtService.sign(payload),
        }
    }

    async register(data: {
        email: string;
        name: string;
        password: string;
    }){
        const hashedPassword = await bcrypt.hash(data.password, 10)
        return this.usersService.create({...data, password: hashedPassword})
    }
}
