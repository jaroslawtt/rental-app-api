import { IsBoolean, IsInt, IsNumber, IsString, Max, MaxLength, Min } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";




export class Apartment {
    @ApiProperty({description: "Unique apartment identifier", nullable: false})
    id: number;
    @ApiProperty({description: "The name of apartment", nullable: false})
    name: string;
    @ApiProperty({description: "The number of apartment rooms", nullable: false})
    rooms: string;
    @ApiProperty({description: "The number of days apartment can be rented for", nullable: false})
    days: number;
    @ApiProperty({description: "Apartment price", nullable: false})
    price: number;
    @ApiProperty({description: "The apartment status whether it is rented or not", nullable: false})
    rented: boolean;
}

export class CreateApartmentDto {
    @IsString()
    @ApiProperty({description: "The name of apartment", nullable: false, example: 'Sun Hotel', maxLength: 99, minLength: 0})
    @MaxLength(99)
    name: string;
    @IsString()
    @ApiProperty({description: "The number of apartment rooms", nullable: false, example: '3+', type: String})
    rooms: string;
    @IsInt()
    @Min(0)
    @ApiProperty({description: "The number of days apartment can be rented for", nullable: false, example: 15, type: Number})
    days: number;
    @IsNumber()
    @Min(0)
    @Max(99999)
    @ApiProperty({description: "Apartment price", nullable: false, example: 9999.00, type: Number, maximum: 99999, minimum: 0})
    price: number;
}

export class UpdateApartmentDto extends CreateApartmentDto{
    @ApiProperty({description: "The apartment status whether it is rented or not", nullable: false, example: true, type: Boolean, default: false})
    @IsBoolean()
    rented: boolean;
}