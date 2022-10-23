import { IsBoolean, IsInt, IsNumber, IsString, Max, MaxLength, Min } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";




export class Apartment {
    @ApiProperty({description: "Unique apartment identifier", nullable: false})
    readonly id: number;
    @ApiProperty({description: "The name of apartment", nullable: false})
    readonly name: string;
    @ApiProperty({description: "The number of apartment rooms", nullable: false})
    readonly rooms: string;
    @ApiProperty({description: "The number of days apartment can be rented for", nullable: false})
    readonly days: number;
    @ApiProperty({description: "Apartment price", nullable: false})
    readonly price: number;
    @ApiProperty({description: "The apartment status whether it is rented or not", nullable: false})
    readonly rented: boolean;
}
