import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { HotelsDataType } from '../types/hotels'

export const HotelsContextData = React.createContext<{
  hotels: HotelsDataType | null
  onChangeNightsNumber?: (
    name: string,
    nights: number,
    totalPrice: number
  ) => void
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

  const onChangeNightsNumber = (
    name: string,
    nights: number,
    totalPrice: number
  ) => {
    if (hotelsData) {
      const updatedHotels = hotelsData.map(hotel => {
        if (hotel.name === name) {
          hotel.nightsNumber = nights
          hotel.totalPrice = totalPrice
        }
        return hotel
      })

      setHotelsData(updatedHotels)
    }
  }

  return (
    <HotelsContextData.Provider
      value={{ hotels: hotelsData, onChangeNightsNumber }}
    >
      {props.children}
    </HotelsContextData.Provider>
  )
}
