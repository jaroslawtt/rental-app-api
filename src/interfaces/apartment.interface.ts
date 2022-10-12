

export interface IApartment {
  id: string,
  name: string,
  rooms: string,
  days: number,
  price: number,
  rented: boolean,
}

export interface CreateApartmentDto {
  name: string,
  rooms: string,
  days: number,
  price: number,
}