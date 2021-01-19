import { HotelType } from './'

export type ContextType = {
  error: Error | null
  hotels: HotelType[] | null

  changeNightsAndPrice: (
    id: string,
    nights: number,
    totalPrice: number
  ) => void
  getHotels: () => void
  removeHotelCard: (id: string) => void
}
