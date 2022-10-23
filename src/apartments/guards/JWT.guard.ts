import {Injectable, CanActivate, ExecutionContext, UnauthorizedException} from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";
import {jwtConstants} from "../../auth/constants";
@Injectable()
export class JWTGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {
    }
    async canActivate(
        context: ExecutionContext,
    ): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const { autorization } = request.headers ;
        if(!autorization) throw new UnauthorizedException(`No access token`);
        const token = autorization.split(` `)[1];
        try {
            const validToken = this.jwtService.verify(token, {
                secret: jwtConstants.secret,
            });
            if(!validToken) new Error(`Token expired`);
        }
        catch (e) {
            throw new UnauthorizedException(e.message);
        }
        return true;
    }
}