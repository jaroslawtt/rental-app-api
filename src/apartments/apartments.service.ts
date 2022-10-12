import { Injectable } from '@nestjs/common';
import { CreateApartmentDto, IApartment } from "../interfaces/apartment.interface";
import { apartments } from "../api/apartments";

@Injectable()
export class ApartmentsService {
    private _apartmentsList: Array<IApartment> = [...apartments];
    async getApartments(){
      return new Promise<IApartment[]>(resolve => {
        setTimeout(() => {
          resolve(this._apartmentsList);
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

    async insertApartment(apartment: CreateApartmentDto){
      return new Promise<IApartment>(resolve => {
        const newApartment: IApartment = {
          id: `${Date.now()}`,
          ...apartment,
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
    }


}
