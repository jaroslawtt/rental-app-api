import {Injectable, CanActivate, ExecutionContext, UnauthorizedException} from '@nestjs/common';
import { Observable } from 'rxjs';
import {UserDto} from "../dto/UserDto";
import {UsersService} from "../../users/users.service";
import {AuthService} from "../auth.service";
@Injectable()
export class AuthSignUpGuard implements CanActivate {
    constructor(private readonly authService: AuthService) {
    }
    async canActivate(
        context: ExecutionContext,
    ): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const { username }: UserDto = request.body;
        const user = await this.authService.validateUser(username);
        if(user) throw new UnauthorizedException(`User already exists`);
        return true;
    }
}