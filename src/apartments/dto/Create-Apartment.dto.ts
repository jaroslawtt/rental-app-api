import { IsInt, IsNumber, IsString, Max, MaxLength, Min } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateApartmentDto {
    @IsString()
    @ApiProperty({description: "The name of apartment", nullable: false, example: 'Sun Hotel', maxLength: 99, minLength: 0})
    @MaxLength(99)
    readonly name: string;
    @IsString()
    @ApiProperty({description: "The number of apartment rooms", nullable: false, example: '3+', type: String})
    readonly rooms: string;
    @IsInt()
    @Min(0)
    @ApiProperty({description: "The number of days apartment can be rented for", nullable: false, example: 15, type: Number})
    readonly days: number;
    @IsNumber()
    @Min(0)
    @Max(99999)
    @ApiProperty({description: "Apartment price", nullable: false, example: 9999.00, type: Number, maximum: 99999, minimum: 0})
    readonly price: number;
}