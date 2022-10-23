import { Module } from '@nestjs/common';
import { ApartmentsModule } from './apartments/apartments.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ApartmentsModule, AuthModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
