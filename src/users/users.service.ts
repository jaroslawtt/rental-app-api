import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {User} from "../entities/users.entity";

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {
    }
    async insertUser({ username, password }: { username: string, password: string}): Promise<any>{
        return this.prisma.user.create({
            data: {
                username,
                password,
            }
        });
    }

    async getUser(username: string): Promise<User> | null{
        return this.prisma.user.findUnique({
            where: {
                username,
            }
        });
    }
}
