import React, { useState, useEffect } from 'react'

import axios from 'axios'

import { HotelType, ContextType } from '../types'

export const HotelsContextData = React.createContext<{
  hotels: HotelType[] | null
  error: Error | null

  changeNightsAndPrice?: (
    id: string,
    nights: number,
    totalPrice: number
  ) => void
  getHotels?: () => void
  removeHotelCard?: (id: string) => void
}>({
  hotels: null,
  error: null,
})

export const HotelsContext: React.FC = props => {
  const [hotelsData, setHotelsData] = useState<HotelType[] | null>(null)

  const [error, setError] = useState<Error | null>(null)

  const getUniqueHotels = (data: HotelType[]) => {
    const randomHotels = []

    for (let i = 0; i < 4; i++) {
      const randomHotel = data[Math.floor(Math.random() * data.length)]

      randomHotels.push(randomHotel)
    }
    const uniqueHotels = Array.from(new Set(randomHotels))

    return uniqueHotels
  }

  const changeImagesUrls = (hotels: HotelType[]) => {
    hotels.forEach(
      hotel => (hotel.image = hotel.image.replace('pixel', 'flickr'))
    )
  }

  const getHotels = () => {
    setHotelsData(null)

    axios
      .get('https://6002ae4f4f17c800175581ee.mockapi.io/api/hotels/hotels')
      .then(response => {
        const hotelsData = getUniqueHotels(response.data)

        changeImagesUrls(hotelsData)

        setHotelsData(hotelsData)
      })
      .catch(error => {
        setError(error)
      })
  }

  useEffect(() => {
    getHotels()
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

  const contextValues: ContextType = {
    hotels: hotelsData,
    error: error,
    changeNightsAndPrice,
    getHotels,
    removeHotelCard,
  }

  return (
    <HotelsContextData.Provider value={contextValues}>
      {props.children}
    </HotelsContextData.Provider>
  )
}
