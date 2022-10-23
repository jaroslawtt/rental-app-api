import { Module } from '@nestjs/common';
import { ApartmentsController } from './apartments.controller';
import { ApartmentsService } from './apartments.service';
import {PrismaService} from "../prisma.service";
import {JwtService} from "@nestjs/jwt";

@Module({
  controllers: [ApartmentsController],
  providers: [ApartmentsService, PrismaService, JwtService]
})
export class ApartmentsModule {}
