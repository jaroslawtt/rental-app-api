import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApartmentsService } from "./apartments.service";
import { CreateApartmentDto } from "../interfaces/apartment.interface";

@Controller('apartments')
export class ApartmentsController {
    constructor(private apartmentService: ApartmentsService) {
    }
    @Get(``)
    async getApartments(){
        return await this.apartmentService.getApartments();
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
}
