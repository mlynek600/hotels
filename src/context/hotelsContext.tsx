import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { HotelsDataType } from '../types/hotels'

export const HotelsContextData = React.createContext<HotelsDataType | null>(
  null
)

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

  return (
    <HotelsContextData.Provider value={hotelsData}>
      {props.children}
    </HotelsContextData.Provider>
  )
}
