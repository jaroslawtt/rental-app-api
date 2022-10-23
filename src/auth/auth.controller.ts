import {Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {

    constructor(private readonly AuthService: AuthService) {
    }

    @Post(`sign-in`)
    async loginWithCredentials(username: string, password: string){

    }
}
