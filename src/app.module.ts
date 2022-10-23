import { Module } from '@nestjs/common';
import { ApartmentsModule } from './apartments/apartments.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule, ApartmentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
