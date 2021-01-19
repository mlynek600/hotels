import { HotelType } from '../types/'

const getOrderPrice = (hotels: HotelType[]): number => {
  let result = 0

  hotels.forEach(hotel => {
    result += hotel.totalPrice
  })

  return result
}

export default getOrderPrice
