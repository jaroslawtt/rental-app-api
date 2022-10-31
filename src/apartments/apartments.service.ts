import { Injectable } from '@nestjs/common';
import { CreateApartmentDto, UpdateApartmentDto } from "../entities";
import { PrismaService } from "../prisma.service";
import { Apartment } from "../entities";

@Injectable()
export class ApartmentsService {
    private _getSortedList(apartmentsList,priceSortType){
        const sortedList = [...apartmentsList].sort((apartment1, apartment2) => apartment1.price - apartment2.price);
        return priceSortType === 'desc' ? sortedList.reverse() : sortedList;
    };

    constructor(private prismaService: PrismaService) {
    }

    async getApartments(priceSort?: string, rooms?: string): Promise<Apartment[]>{
        const apartmentsList = await this.prismaService.apartment.findMany();
        if(rooms){
            if(priceSort) return this._getSortedList(apartmentsList.filter(apartment => apartment.rooms === rooms), priceSort);
            else return apartmentsList.filter(apartment => apartment.rooms === rooms);
        }
        else if(!rooms && priceSort) return this._getSortedList(apartmentsList, priceSort);
        else return apartmentsList;
    };


    async getApartment(id: number): Promise<Apartment>{
        return this.prismaService.apartment.findUnique({
            where: { id
            }
        })
    };


    async insertApartment({name, rooms, price, days}: CreateApartmentDto): Promise<Apartment>{
        return this.prismaService.apartment.create({
            data: {
                name,
                rooms,
                price,
                days,
            }
        })
    };


    async removeApartment(id: number): Promise<Apartment>{
        return this.prismaService.apartment.delete({
            where: { id
            }
        })
    };


    async updateApartment(apartmentDto: UpdateApartmentDto, id: number): Promise<Apartment>{
        return this.prismaService.apartment.update({
            where: {
                id,
            },
            data: {
                ...apartmentDto,
            }
        })
    };
}
