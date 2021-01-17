import React, { useContext } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { HotelsContextData } from '../../context/hotelsContext'
import HotelCard from './HotelCard'
import ContentContainer from '../UI/ContentContainer'

const HotelCards: React.FC = () => {
  const hotelsData = useContext(HotelsContextData)

  const getTotalOrderPrice = () => {
    let result = 0
    hotelsData.hotels?.forEach(hotel => {
      result += hotel.totalPrice || 0
    })
    return result
  }

  const cardElements = hotelsData.hotels?.map(hotel => {
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
        <>
          {cardElements}

          <TotalContainer>
            <TotalAmount>{getTotalOrderPrice()} $</TotalAmount>

            <LinkContainer>
              <Link to="/payment">
                <BuyButton>Buy</BuyButton>
              </Link>
            </LinkContainer>
          </TotalContainer>
        </>
      </ContentContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-top: 50px;
  width: 900px;
`

const TotalContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSize.s20};
  justify-self: end;
  margin-right: 30px;
  margin-bottom: 50px;
`

const TotalAmount = styled.div`
  text-align: end;
  margin-right: 30px;
  margin-bottom: 20px;
`

const LinkContainer = styled.div`
  margin-right: 30px;
  margin-bottom: 50px;
`

const BuyButton = styled.button`
  height: 40px;
  width: 200px;
  border: 1px solid black;
  background-color: ${({ theme }) => theme.colors.purpleGrey};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s20};
  justify-self: end;
`

export default HotelCards
