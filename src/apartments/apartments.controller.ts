import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    Put,
    Query,
    UseGuards,
    Headers
} from "@nestjs/common";
import { ApartmentsService } from "./apartments.service";
import { Apartment } from "../entities";
import {ApiOperation, ApiParam, ApiResponse} from "@nestjs/swagger";
import { JWTGuard } from "./guards";
import {CreateApartmentDto, UpdateApartmentDto} from "./dto";

@Controller('apartments')
@UseGuards(JWTGuard)
export class ApartmentsController {
    constructor(private apartmentService: ApartmentsService) {
    }
    @Get(``)
    @ApiOperation({ summary: "Returns all apartments"})
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Array<Apartment>})
    async getApartments(@Query(`price`) price, @Query(`rooms`) rooms, @Headers(`Autorization`) autorization: string)
        : Promise<Array<Apartment>>{
        return await this.apartmentService.getApartments(autorization,price,rooms);
    };

    @Get(`/:id`)
    @ApiOperation({ summary: "Returns apartment with given id"})
    @ApiParam({ name: "id", required: true, description: "Apartment identifier" })
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Apartment})
    async getApartment(@Param('id', ParseIntPipe) id: number): Promise<Apartment>{
        return await this.apartmentService.getApartment(id);
    };

    @Post()
    @ApiOperation({ summary: "Inserts new apartment"})
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Apartment})
    async addApartment(@Body() body: CreateApartmentDto, @Headers(`Autorization`) autorization: string): Promise<Apartment>{
        return await this.apartmentService.insertApartment(body, autorization);
    };

    @Delete(`/:id`)
    @ApiOperation({ summary: "Deletes apartment"})
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Apartment})
    async deleteApartment(@Param('id', ParseIntPipe) id: number): Promise<Apartment>{
        return await this.apartmentService.removeApartment(id);
    };

    @Put(`/:id`)
    @ApiOperation({ summary: "Updates details of apartment with given id" })
    @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Apartment})
    async updateApartment(@Body() body: UpdateApartmentDto, @Param(`id`, ParseIntPipe) id): Promise<Apartment>{
       return await this.apartmentService.updateApartment(body, id);
    }
}
