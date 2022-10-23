import { Injectable } from '@nestjs/common';
import { UsersService } from "../users/users.service";
import { User } from "../entities/users.entity";
import { UserDto } from "./dto";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {
    }

    async registerUser(dto: UserDto): Promise<any>{
       return {

       };
    }

    async loginWithCredentials(dto: UserDto): Promise<any>{
        return {
            access_token: this.jwtService.sign({...dto})
        };
    }

    async validateUser(username: string): Promise<User | null>{
        return this.usersService.getUser(username);
    }
}
