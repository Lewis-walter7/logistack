import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}
    async create( data ) {
        return this.prisma.user.create({ data });
    }

    async findByEmail(email: string){
        return this.prisma.user.findUnique({
            where: { email },
        });
    }
}
