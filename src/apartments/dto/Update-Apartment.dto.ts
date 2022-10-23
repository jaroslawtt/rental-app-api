import {CreateApartmentDto} from "./Create-Apartment.dto";
import {ApiProperty} from "@nestjs/swagger";
import {IsBoolean} from "class-validator";

export class UpdateApartmentDto extends CreateApartmentDto{
    @ApiProperty({description: "The apartment status whether it is rented or not", nullable: false, example: true, type: Boolean, default: false})
    @IsBoolean()
    readonly rented: boolean;
}