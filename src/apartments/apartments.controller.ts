import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ApartmentsService } from "./apartments.service";
import { CreateApartmentDto, UpdateApartmentDto } from "../interfaces/apartment.interface";

@Controller('apartments')
export class ApartmentsController {
    constructor(private apartmentService: ApartmentsService) {
    }
    @Get(``)
    async getApartments(@Query(`price`) price, @Query(`rooms`) rooms){
        return await this.apartmentService.getApartments(price,rooms);
    };

    @Get(`/:id`)
    async getApartment(@Param(`id`) id){
        return await this.apartmentService.getApartment(id);
    };

    @Post()
    async addApartment(@Body() body: CreateApartmentDto){
        return await this.apartmentService.insertApartment(body);
    };

    @Delete(`/:id`)
    async deleteApartment(@Param('id') id){
        return await this.apartmentService.removeApartment(id);
    };

    @Put(`/:id`)
    async updateApartment(@Body() body: UpdateApartmentDto, @Param(`id`) id){
       return await this.apartmentService.updateApartment(body, id);
    }
}
