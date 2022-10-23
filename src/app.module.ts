import { Module } from '@nestjs/common';
import { ApartmentsModule } from './apartments/apartments.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ApartmentsModule, AuthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
