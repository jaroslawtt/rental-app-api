import { IsBoolean, IsString, Max, MaxLength, Min } from "class-validator";


export class CreateApartmentDto {
    @IsString()
    @MaxLength(99)
    name: string;
    @IsString()
    rooms: string;
    @Min(0)
    days: number;
    @Min(0)
    @Max(9999)
    price: number;
}

export class UpdateApartmentDto extends CreateApartmentDto{
    @IsBoolean()
    rented: boolean;
}