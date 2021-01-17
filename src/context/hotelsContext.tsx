import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { HotelsDataType } from '../types/hotels'

export const HotelsContextData = React.createContext<{
  hotels: HotelsDataType | null
  changeNightsAndPrice?: (
    id: string,
    nights: number,
    totalPrice: number
  ) => void
  removeHotelCard?: (id: string) => void
}>({ hotels: null })

export const HotelsContext: React.FC = props => {
  const [hotelsData, setHotelsData] = useState<HotelsDataType>(null)

  useEffect(() => {
    axios
      .get('https://6002ae4f4f17c800175581ee.mockapi.io/api/hotels/hotels')
      .then(response => {
        setHotelsData(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const changeNightsAndPrice = (
    id: string,
    nights: number,
    totalPrice: number
  ) => {
    if (hotelsData) {
      const updatedHotels = hotelsData.map(hotel => {
        if (hotel.id === id) {
          hotel.nightsNumber = nights
          hotel.totalPrice = totalPrice
        }
        return hotel
      })

      setHotelsData(updatedHotels)
    }
  }

  const removeHotelCard = (id: string) => {
    if (hotelsData) {
      const updatedHotels = hotelsData?.filter(hotel => hotel.id !== id)
      setHotelsData(updatedHotels)
    }
  }

  return (
    <HotelsContextData.Provider
      value={{ hotels: hotelsData, changeNightsAndPrice, removeHotelCard }}
    >
      {props.children}
    </HotelsContextData.Provider>
  )
}
