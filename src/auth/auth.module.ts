import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from '@nestjs/passport'
import { jwtConstants } from './constants';
import { UsersModule } from "../users/users.module";

@Module({
  providers: [AuthService],
  imports: [UsersModule, PassportModule,
      JwtModule.register({
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '360s' },
      })],
  controllers: [AuthController]
})
export class AuthModule {
}
