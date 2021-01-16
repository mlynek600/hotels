export type HotelType = {
  id: string
  name: string
  subtitle: string
  price: string
  image: string
  nightsNumber?: number
  totalPrice?: number
}

export type HotelsDataType = HotelType[] | null
