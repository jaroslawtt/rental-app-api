import { Injectable } from '@nestjs/common';
import { CreateApartmentDto, UpdateApartmentDto } from "./dto";
import { PrismaService } from "../prisma.service";
import { Apartment } from "../entities";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class ApartmentsService {
    private _getSortedList(apartmentsList,priceSortType){
        const sortedList = [...apartmentsList].sort((apartment1, apartment2) => {if(apartment1.price > apartment2.price) return 1; else if(apartment1.price < apartment2.price) return -1; else return 0;
        });
        if(priceSortType === 'desc') sortedList.reverse();
        return sortedList;
    };

    constructor(private readonly prismaService: PrismaService, private readonly jwtService: JwtService) {
    }

    async getApartments(header: string, priceSort?: string, rooms?: string): Promise<Apartment[]>{
        const username: string = this.jwtService.decode(header.split(` `)[1])[`username`];
        const { apartments} = await this.prismaService.user.findUnique({
            where: {
                username,
            },
            include: {
                apartments: true,
            }
        });
        if(rooms){
            if(priceSort) return this._getSortedList(apartments.filter(apartment => apartment.rooms === rooms), priceSort);
            else return apartments.filter(apartment => apartment.rooms === rooms);
        }
        else if (!rooms && priceSort) return this._getSortedList(apartments, priceSort);
        else return apartments;
    };


    async getApartment(id: number): Promise<Apartment>{
        return this.prismaService.apartment.findUnique({
            where: {
                id,
            }
        });
    };


    async insertApartment(dto: CreateApartmentDto, header: string): Promise<Apartment>{
        const username: string = this.jwtService.decode(header.split(` `)[1])[`username`];
        return this.prismaService.apartment.create({
            data: {
                ...dto,
                user: {
                    connect: {
                        username,
                    }
                }
            }
        });
    };


    async removeApartment(id: number): Promise<Apartment>{
        return this.prismaService.apartment.delete({
            where: {
                id
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
