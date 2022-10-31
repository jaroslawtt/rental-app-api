import {Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put, Query} from "@nestjs/common";
import { ApartmentsService } from "./apartments.service";
import { CreateApartmentDto, UpdateApartmentDto, Apartment } from "../entities";
import {ApiOperation, ApiParam, ApiResponse} from "@nestjs/swagger";

@Controller('apartments')
export class ApartmentsController {
    constructor(private apartmentService: ApartmentsService) {
    }
    @Get(``)
    @ApiOperation({ summary: "Returns all apartments" })
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Array<Apartment> })
    getApartments(@Query(`price`) price, @Query(`rooms`) rooms): Promise<Array<Apartment>> {
        return this.apartmentService.getApartments(price,rooms);
    };

    @Get(`/:id`)
    @ApiOperation({ summary: "Returns apartment with given id" })
    @ApiParam({ name: "id", required: true, description: "Apartment identifier" })
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Apartment })
    getApartment(@Param('id', ParseIntPipe) id: number): Promise<Apartment> {
        return this.apartmentService.getApartment(id);
    };

    @Post()
    @ApiOperation({ summary: "Inserts new apartment" })
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Apartment })
    addApartment(@Body() body: CreateApartmentDto): Promise<Apartment> {
        return this.apartmentService.insertApartment(body);
    };


    @Delete(`/:id`)
    @ApiOperation({ summary: "Deletes apartment" })
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Apartment })
    deleteApartment(@Param('id', ParseIntPipe) id: number): Promise<Apartment> {
        return this.apartmentService.removeApartment(id);
    };

    @Put(`/:id`)
    @ApiOperation({ summary: "Updates details of apartment with given id" })
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Apartment})
    updateApartment(@Body() body: UpdateApartmentDto, @Param(`id`, ParseIntPipe) id): Promise<Apartment> {
       return this.apartmentService.updateApartment(body, id);
    }
}
