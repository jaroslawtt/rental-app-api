import {Body, Controller, Post, UseGuards} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {UserDto} from "./dto";
import {AuthSignUpGuard} from "./guards";
import {AuthSignInGuard} from "./guards";

@Controller('auth')
export class AuthController {

    constructor(private readonly AuthService: AuthService) {
    }

    @Post(`sign-in`)
    @UseGuards(AuthSignInGuard)
    async loginWithCredentials(@Body() body: UserDto){
        return await this.AuthService.loginWithCredentials(body);
    }

    @Post('sign-up')
    @UseGuards(AuthSignUpGuard)
    async registerWithCredentials(@Body() body: UserDto){
        return await this.AuthService.registerUser(body);
    }
}
