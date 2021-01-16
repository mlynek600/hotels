import React, { useContext } from 'react'
import styled from 'styled-components'
import { HotelsContextData } from '../../context/hotelsContext'
import HotelCard from './HotelCard'
import ContentContainer from '../UI/ContentContainer'

const HotelCards: React.FC = () => {
  const hotelsData = useContext(HotelsContextData)

  const cardElements =
    hotelsData &&
    hotelsData.map(hotel => {
      const { id, name, subtitle, price, image } = hotel
      return (
        <HotelCard
          key={id}
          id={id}
          name={name}
          subtitle={subtitle}
          price={price}
          image={image}
        />
      )
    })

  return (
    <Wrapper>
      <ContentContainer>
        <>{cardElements}</>
      </ContentContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-top: 50px;
`

export default HotelCards
