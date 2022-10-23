import {Injectable, CanActivate, ExecutionContext, UnauthorizedException} from '@nestjs/common';
import {UserDto} from "../dto";
import {AuthService} from "../auth.service";
@Injectable()
export class AuthSignInGuard implements CanActivate {
    constructor(private readonly authService: AuthService) {
    }
    async canActivate(
        context: ExecutionContext,
    ): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const { username, password }: UserDto = request.body;
        const user = await this.authService.validateUser(username);
        if(!user) throw new UnauthorizedException(`User doesn't exist`);
        if(user.password !== password) throw new UnauthorizedException(`Password doesn't match`);
        return true;
    }
}