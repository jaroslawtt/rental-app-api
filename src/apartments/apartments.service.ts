import { Injectable } from '@nestjs/common';
import { CreateApartmentDto, IApartment, UpdateApartmentDto } from "../interfaces";
import { apartments } from "../api";

@Injectable()
export class ApartmentsService {
    private _apartmentsList: Array<IApartment> = [...apartments];
    private _getSortedList(apartmentsList,priceSortType){
      const sortedList = [...apartmentsList].sort((apartment1, apartment2) => {
        if(apartment1.price > apartment2.price) return 1;
        else if(apartment1.price < apartment2.price) return -1;
        else return 0;
      });
      if(priceSortType === 'desc') sortedList.reverse();
      return sortedList;
    };

    async getApartments(priceSort?: string, rooms?: string){
      return new Promise<IApartment[]>(resolve => {
        setTimeout(() => {
          if(rooms){
            if(priceSort) resolve(this._getSortedList(this._apartmentsList.filter(apartment => apartment.rooms === rooms), priceSort));
            else resolve(this._apartmentsList.filter(apartment => apartment.rooms === rooms));
          }
          else if(!rooms && priceSort) resolve(this._getSortedList(this._apartmentsList, priceSort));
          else resolve(this._apartmentsList);
        }, 1000);
      })
    };

    async getApartment(id: string){
      return new Promise<IApartment>(resolve => {
        setTimeout(() => {
          resolve(this._apartmentsList.filter(apartment => apartment.id === id)[0]);
        }, 1000)
      })
    };

    async insertApartment(apartmentDto: CreateApartmentDto){
      return new Promise<IApartment>(resolve => {
        const newApartment: IApartment = {
          id: `${Date.now()}`,
          ...apartmentDto,
          rented: false,
        };
        setTimeout(() => {
          this._apartmentsList.push(newApartment)
          resolve(newApartment);
        }, 1000)
      })
    };

    async removeApartment(id: string){
      return new Promise<IApartment>(resolve => {
        setTimeout(() => {
          resolve(this._apartmentsList.filter(apartment => apartment.id !== id)[0]);
          this._apartmentsList = this._apartmentsList.filter(apartment => apartment.id !== id);
        }, 1000)
      })
    };

    async updateApartment(apartmentDto: UpdateApartmentDto, id: string){
        return new Promise<IApartment>(resolve => {
            setTimeout(() => {
              resolve(this._apartmentsList.splice(this._apartmentsList.findIndex(apartment => apartment.id === id),
                1, {
                id,
                  ...apartmentDto,
                })[0])
            }, 1000)
        })
    };

}
